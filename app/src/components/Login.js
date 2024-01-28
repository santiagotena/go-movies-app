import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const { setAlertMessage } = useOutletContext();
  const { toggleRefresh } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // build the request payload
    let payload = {
      email: email,
      password: password,
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    }

    fetch(`/authenticate`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setAlertClassName("alert-danger");
        setAlertMessage(data.message);
      } else {
        setJwtToken(data.access_token);
        setAlertClassName("d-none");
        setAlertMessage("");
        toggleRefresh(true);
        navigate("/")
      }
    })
    .catch(error => {
      setAlertClassName("alert-danger");
      setAlertMessage(error);
    })

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
