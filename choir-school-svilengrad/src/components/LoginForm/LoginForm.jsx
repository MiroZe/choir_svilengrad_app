import { useState, useContext } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./LoginForm.module.css";
import Button from "react-bootstrap/Button";
import { errorCheck } from "../../utils/utils";
import { userLogin } from "../../services/userService";
import { Usercontext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import logo from '../../../public/SHKOLA_ZNAK.png';


const LoginForm = () => {
  const { setUserFunction } = useContext(Usercontext);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const onChangeLoginFormHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const loginUserHandler = async (e, { username, password }) => {
    e.preventDefault();
    const userData = { username, password };

    const loggedUser = await userLogin(userData);

    setUserFunction(loggedUser);
    navigate("/");
  };
  const errCheck = (e, criteria, pattern) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: errorCheck(e.target.value, criteria, pattern),
    }));
  };

  return (
    <div className={styles["form-container"]}>
      <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Login Form</h2>
      </div>

      <form action="" onSubmit={(e) => loginUserHandler(e, formValues)}>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="username"
            name="username"
            onChange={onChangeLoginFormHandler}
            value={formValues.username}
            onBlur={(e) => errCheck(e, 5)}
          />
          {errors.username && (
            <p className="error">
              Username should be at least 5 characters long!
            </p>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            name="password"
            onChange={onChangeLoginFormHandler}
            value={formValues.password}
            onBlur={(e) => errCheck(e, "6")}
          />
          {errors.password && (
            <p className="error">Password should be 6 characters at least</p>
          )}
        </FloatingLabel>

        <Button variant="success" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
