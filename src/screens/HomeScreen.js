import React, { Component } from 'react';
import Home from '../components/Home';
import Slide from '../components/Slide';
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Slide />
                <Home />
            </div>
        );
    }
}
