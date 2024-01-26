import { useState } from "react";
import Input from "./form/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr></hr>

      <form onSubmit={handleSubmit}>
        <Input
          type="Email Address"
          className="email"
          name="email"
          autoComplete="email-new"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="Password"
          className="password"
          name="password"
          autoComplete="password-new"
          onChange={(event) => setPassword(event.target.value)}
        />
				<hr></hr>
				<input
					type="submit"
					className="btn btn-primary"
					value="Login"
				></input>
      </form>
    </div>
  );
}

export default Login;
