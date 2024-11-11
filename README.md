# SD Internship Assignment

## Overview

This assignment is to build a simple user registration system using the following technologies:

- **Frontend**: React
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL

## Screenshots
![image](https://github.com/user-attachments/assets/881cf3e4-a505-46f9-9351-bd933d66d61b)

![image](https://github.com/user-attachments/assets/25c25268-1569-4e3b-a7a4-6cd4c444dfc5)



## Setup

### 1. Set up the Database

Start by creating the `Registration` table in PostgreSQL:

```sql
CREATE TABLE Registration (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    DoB DATE,
    PhoneNo VARCHAR(15),
    Address TEXT,
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Insert some initial data into the table:

```sql

INSERT INTO Registration (Name, Email, DoB, PhoneNo, Address)
VALUES ('Sujit Bhoir', 'sujit@gmail.com', '2004-06-18', '9356000000', 'Mumbai, Maharashtra');

INSERT INTO Registration (Name, Email, DoB, PhoneNo, Address)
VALUES ('Pratham Logde', 'pratham@gmail.com', '2002-01-01', '8698000000', 'Alibag, Maharashtra');

```
### 2. Clone the Project
Clone the project from the repository:

```bash
git clone http://your-repository-url
```
### 3. Backend Setup
Create a .env file in the root of the backend folder with the following configuration:
```bash
DB_URL=postgresql://postgres:root@localhost:5432/UserDB
PORT=5678
```
Navigate to the backend folder:
```bash
cd backend
```
Install the required dependencies and start the server:
```bash
npm install
npm run dev
```
### 4. Frontend Setup
You can now set up the frontend. Make sure to follow the instructions to install the necessary dependencies and run the React app.
Create a .env file in the root of the backend folder with the following configuration:
```bash
VITE_BACKEND_URL=http://localhost:5678
```
Navigate to the frontend folder:
```bash
cd frontend
```
Install the required dependencies and start the server:
```bash
npm install
npm run dev
```



