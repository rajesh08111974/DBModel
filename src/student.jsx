import { useState } from "react"

function StudentForm () {
const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Handle input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Name: ${name}\nPassword: ${password}`);
    // Clear the form after submission
    setName('');
    setPassword('');
  };

  return (
    <div className="App">
      <h2>Student Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;