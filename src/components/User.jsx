import React, { useEffect, useState } from "react";
import Table from "./Table";
import { createUser, deleteUser } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const initState = { name: "", username: "" };

function User() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initState);
  const { users } = useSelector((state) => state.user);

  const CreateUser = () => {
    dispatch(
      createUser({
        id: Math.random(),
        name: user.name,
        username: user.username,
      })
    );
    clear();
  };

  const DeleteUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const onChange = (type, value) => {
    setUser({ ...user, [type]: value });
  };

  const clear = () => {
    setUser(initState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h2>Users</h2>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <form>
            <div className="mb-3">
              <label htmlFor="nameData" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={user.name}
                aria-describedby="name"
                className="form-control"
                onChange={(e) => onChange("name", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usernameData" className="form-label">
                Username
              </label>
              <input
                type="text"
                value={user.username}
                className="form-control"
                aria-describedby="username"
                onChange={(e) => onChange("username", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={clear}>
            Cancel
          </button>
        </div>

        <div className="col-md-1">
          <button className="btn btn-primary" onClick={CreateUser}>
            Save
          </button>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div style={{ height: "25px" }} />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Table data={users} remove={DeleteUser} type="user" />
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default User;
