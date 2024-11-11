import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";

import { pool } from "../db/pgdb";

export interface RegistrationSchema {
  id: number;
  name: string;
  email: string;
  dob: string;
  phoneno: number;
  address: string;
  registrationdate?: string;
}

//create
export const createUser: RequestHandler<
  unknown,
  unknown,
  RegistrationSchema,
  unknown
> = async (req, res, next) => {
  try {
    const { id, name, email, dob, phoneno, address } = req.body;
    if (!name || !email || !dob || !phoneno || !address)
      throw createHttpError(400, "Body must contain required data");

    const query = `
        INSERT INTO Registration (Name, Email, DoB, PhoneNo, Address)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;

    const values = [name, email, dob, phoneno, address];

    const result = await pool.query(query, values);
    res.status(201).json({ ...result.rows[0] });
  } catch (error) {
    next(error);
  }
};

interface updateParams {
  id: string;
}

//update
export const updateUser: RequestHandler<
  updateParams,
  unknown,
  RegistrationSchema,
  unknown
> = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, dob, phoneno, address } = req.body;
    if (!id || !name || !email || !dob || !phoneno || !address)
      throw createHttpError(400, "Body must contain required data");

    //if user is available or not
    const checkQuery = "SELECT * FROM Registration WHERE ID = $1";
    const checkValues = [id];
    const checkResult = await pool.query(checkQuery, checkValues);

    // check if present or not
    if (checkResult.rowCount === 0) {
      throw createHttpError(404, "User not found");
    }

    const query = `
        UPDATE Registration
            SET Name = $1, DoB = $2, PhoneNo = $3, Address = $4
            WHERE ID = $5
        RETURNING *;
    `;

    const values = [name, dob, phoneno, address, id];

    const result = await pool.query(query, values);
    res.status(201).json({ ...result.rows[0] });
  } catch (error) {
    next(error);
  }
};

//read
export const getUser: RequestHandler<
  updateParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw createHttpError(400, "ID is required");

    //  find user by id
    const query = "SELECT * FROM Registration WHERE ID = $1";
    const values = [id];

    const result = await pool.query(query, values);

    // Check if user exists
    if (result.rowCount === 0) {
      throw createHttpError(404, "User not found");
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    // get all users
    const query = "SELECT * FROM Registration";

    const result = await pool.query(query);

    // Check if there are any users
    if (result.rowCount === 0) {
      throw createHttpError(404, "No users found");
    }

    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteUser: RequestHandler<
  updateParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw createHttpError(400, "ID is required");

    //  check if user exists
    const checkQuery = "SELECT * FROM Registration WHERE ID = $1";
    const checkValues = [id];
    const checkResult = await pool.query(checkQuery, checkValues);

    if (checkResult.rowCount === 0) {
      throw createHttpError(404, "User not found");
    }

    // delete the user
    const deleteQuery = "DELETE FROM Registration WHERE ID = $1 RETURNING *";
    const deleteResult = await pool.query(deleteQuery, [id]);

    res.status(200).json({
      message: "User deleted successfully",
      user: deleteResult.rows[0],
    });
  } catch (error) {
    next(error);
  }
};
