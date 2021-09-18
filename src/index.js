import './index.css';
import React from "react";
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

let render = () =>
{
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<Provider store={store}>
					<App store={store}/>
				</Provider>
			</React.StrictMode>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
render();
store.subscribe(render);
window.state = store.getState();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
