import React from 'react';
import './App.css';
import Layout from "./layout/Layout";
import Modal from "react-modal";

const App = () => {

    Modal.setAppElement('#root');

    return (
        <div className="App">
            <Layout/>
        </div>
    );
}

export default App;
