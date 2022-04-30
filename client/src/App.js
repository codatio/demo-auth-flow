import React from 'react'
import Login from './pages/Login/Login';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const username = 'User';

  // To test the login endpoint, remove when #3 is merged 
  const handleLogin = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    })
    .then((res) => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
