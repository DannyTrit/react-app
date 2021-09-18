import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logIn, requestCaptcha} from "../../redux/reducers/authReducer";

const mapStateToProps = (state) =>
({
	isAuth: state.auth.isAuth,
	userID: state.auth.userID,
	captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {logIn, requestCaptcha})(Login)