import React from "react";
import { useDispatch } from "react-redux";
import { LogOutRequest } from "../../services/login_action";
function LogOutForm(props) {
  const dispatch = useDispatch();
  dispatch(LogOutRequest({ date: "pen" }));
  console.log(LogOutRequest);
  return <div></div>;
}

export default LogOutForm;
