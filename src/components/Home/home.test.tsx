import React from 'react';
import '../../setupTests';
import Home from "./index";
import ReactDOM from "react-dom";


describe('Test the Home Component', () => {
    it('render without craching', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})