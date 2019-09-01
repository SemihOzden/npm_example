import React from 'react';
import './index.css';
import App from './App';

class ExportApp extends React.Component{
    render(){
        return(<App sayHi="hello There I am creating my first npm package"/>);
    }
}
export default ExportApp;

