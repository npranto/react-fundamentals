// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).

  const [error, setError] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitUsername(e.target.elements.username.value);
  }

  function handleChange(e) {
    const {value} = e.target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <div
          role="alert"
          style={{color: 'maroon', fontStyle: 'italic', fontSize: '0.75rem'}}
        >
          {error}
        </div>
      </div>
      <button type="submit" disabled={error !== null}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
