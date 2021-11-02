/**
 * LoginPage
 *
 */

import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import Button from "../../components/Button";

// actions
import { requestLogin } from "../redux/actions";

// style
import Wrapper from "./style";

const LoginSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = ({ requestLogin, history }) => {
  const [field, setField] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    const payload = {
      name: data.fullName,
      email: data.email,
      password: data.password,
    };
    requestLogin(payload);
  };

  const handleInputType = () => {
    if (field === "password") {
      setField("text");
    } else {
      setField("password");
    }
  };

  return (
    <Wrapper>
      <div className="d-block">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field mb-3">
            <input placeholder="Full name" {...register("fullName")} />
            {errors.fullName && <p>{errors.email.fullName}</p>}
          </div>
          <div className="input-field mb-3">
            <input placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type={field}
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <span onClick={handleInputType}>
              {field === "password" ? "Show" : "Hide"}
            </span>
          </div>
          <Button className="mt-5 w-100" onClick={() => window.location.replace('/web-task')}>Login</Button>
        </form>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (body) => {
    dispatch(requestLogin(body));
  },
});

export default connect(null, mapDispatchToProps)(LoginPage);
