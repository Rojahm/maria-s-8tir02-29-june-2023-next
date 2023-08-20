import React from "react";

const LoginPage = () => {
  return (
    <form>
      <label className="visually-hidden">Email address</label>
      <input type="email" className="form-control" placeholder="Enter email" />
      <div className="text-muted">
        We ll never share your email with anyone else.
      </div>

      <div>
        <label className="visually-hidden">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
