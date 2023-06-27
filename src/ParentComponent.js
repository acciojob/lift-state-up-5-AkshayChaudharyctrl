import React, { useState } from 'react';

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <ChildComponent handleLoginSubmit={handleLoginSubmit} />
      )}
    </div>
  );
}

function ChildComponent({ handleLoginSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoginSubmit();
  };

  return (
    <div>
       {/* <h3>Child Component - Login Form</h3> */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ParentComponent;
