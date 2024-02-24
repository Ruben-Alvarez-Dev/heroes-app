export const LoginScreen = () => {
  const handleLogin = () => {
    console.log("handleLogin");
  };

  return (
    <>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};
