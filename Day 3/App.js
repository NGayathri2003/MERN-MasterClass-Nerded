import React, { useState } from 'react';
import './App.css';
import UserList from './userlist';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: '', email: '' });
    } else {
      alert('Please fill in both name and email fields.');
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setEditingUser(userToEdit);
    setNewUser({ name: userToEdit.name, email: userToEdit.email });
  };

  const updateUser = () => {
    if (newUser.name && newUser.email) {
      setUsers(users.map(user => (user.id === editingUser.id ? newUser : user)));
      setEditingUser(null);
      setNewUser({ name: '', email: '' });
    } else {
      alert('Please fill in both name and email fields.');
    }
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        {editingUser ? (
          <button onClick={updateUser}>Update</button>
        ) : (
          <button onClick={addUser}>Add</button>
        )}
      </div>
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;