import React from "react";
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./Context/StateProvider";
import { initialState } from "./Context/InitialState";
import reducer from "./Context/Reducer";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </Router>
)