import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const { setAlertMessage } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "valid@email.com") {
      setJwtToken("abc");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid credentials");
    }
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
