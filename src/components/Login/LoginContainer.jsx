import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logIn, setIsAuth} from "../../redux/reducers/authReducer";

const mapStateToProps = (state) =>
({
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {logIn, setIsAuth})(Login)