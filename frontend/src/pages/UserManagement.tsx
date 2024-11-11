import React, { useState, useEffect } from "react";
import { deleteUser, updateUser, fetchUsers } from "../api/user";

const UserManagement = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Fetch users from the API
  const fetchUsersData = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleEdit = (user: any) => {
    const formattedUser = {
      ...user,
      dob: user.dob ? new Date(user.dob).toISOString().split("T")[0] : "",
    };
    setEditingUser(formattedUser);
    setFormData(formattedUser);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    if (editingUser) {
      try {
        await updateUser(editingUser.id, formData);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editingUser.id ? { ...user, ...formData } : user
          )
        );
        setEditingUser(null);
        setFormData({});
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  const handleDelete = async (userId: number) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">User Management</h2>

      <table className="min-w-full table-auto border-collapse border border-gray-200 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Date of Birth</th>
            <th className="px-4 py-2 border-b">Phone</th>
            <th className="px-4 py-2 border-b">Address</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="odd:bg-gray-50">
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">
                {new Date(user.dob).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border-b">{user.phoneno}</td>
              <td className="px-4 py-2 border-b">{user.address}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Edit Form */}
      {editingUser && (
        <div className="bg-white p-4 shadow-md rounded-md mt-6">
          <h3 className="font-bold text-xl mb-4">Edit User</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="border rounded-md block w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="border rounded-md block w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
                className="border rounded-md block w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                name="phoneno"
                value={formData.phoneno || ""}
                onChange={handleChange}
                className="border rounded-md block w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <textarea
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="border rounded-md block w-full p-2"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
