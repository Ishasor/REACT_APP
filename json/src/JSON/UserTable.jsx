import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5137/users';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  const handleAddUser = async () => {
    await axios.post(API_URL, newUser);
    setNewUser({ name: '', email: '' });
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  const handleEditUser = async (id, updatedData) => {
    await axios.put(`${API_URL}/${id}`, updatedData);
    fetchUsers();
  };

  const handlePatchUser = async (id, patchData) => {
    await axios.patch(`${API_URL}/${id}`, patchData);
    fetchUsers();
  };

  return (
    <div className="p-4">
      <h2>User Table</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>

      <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => handlePatchUser(u.id, { name: u.name + "!" })}>Patch</button>
                <button onClick={() => handleEditUser(u.id, { name: 'Updated', email: u.email })}>Put</button>
                <button onClick={() => handleDeleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
