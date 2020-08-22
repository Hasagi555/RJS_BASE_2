import React, { Component } from 'react';
import Introduce from '../components/Introduce';
import Slide from '../components/Slide';
 class IntroduceScreen extends Component {
    render() {
        return (
            <>
                <Slide />
               <Introduce />
            </>
        );
    }
}
export default IntroduceScreen;