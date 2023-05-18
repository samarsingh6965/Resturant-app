import React from "react";
import ReactDom from 'react-dom'
import './index.css'
import App from './App.js'
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./Context/StateProvider";
import { initialState } from "./Context/InitialState";
import reducer from "./Context/Reducer";

ReactDom.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </Router>

    , document.getElementById("root")
)