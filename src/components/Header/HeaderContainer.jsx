import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/reducers/authReducer";

const mapStateToProps = (state) => ({
	login: state.auth.login,
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{logOut})(Header)