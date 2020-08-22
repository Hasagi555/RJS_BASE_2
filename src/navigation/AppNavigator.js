import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import UserScreen from '@screens/UserScreen';

import HomeScreen from '@screens/HomeScreen';
import ContactScreen from '@screens/ContactScreen';
import SearchScreen from '@screens/SearchScreen';
import OrderScreen from '@screens/OrderScreen';
import IntroduceScreen from '@screens/IntroduceScreen';
import SearchOrderScreen from '@screens/SearchOrderScreen';

import Header from '@components/Header';
import Footer from '@components/Footer';




import MainScreen from '@screens/MainScreen';
import LoginScreen from '@screens/Auth/LoginScreen';
import PrivateRoute from './PrivateRoute';

import { ROUTER} from '@constants/Constant'

export class AppNavigator extends Component {

    render() {
        return (
            <Router>
                <Header />
               <Switch>
                    {/* <Route path='/' exact component={HomeScreen} /> */}
                    <Route path={ROUTER.HOME} exact component={HomeScreen} />
                    {/* <Route path='/home' exact component={HomeScreen} /> */}
                    <Route path={ROUTER.CONTACT} exact component={ContactScreen} />
                    <Route path={ROUTER.SEARCHORDER} exact component={SearchScreen} />
                    <Route path={ROUTER.SEARCH} exact component={SearchOrderScreen} />
                    {/* <Route path={ROUTER.SEARCH} exact component={OrderScreen} /> */}
                    <Route path={ROUTER.INTRODUCE} exact component={IntroduceScreen} />
                    {/* <PrivateRoute path='/' exact Component={MainNavigator} /> */}

               </Switch>
                <Footer></Footer>
            </Router>
            
        )
    }
}
// class MainNavigator extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <>
//             <ROUTER>
//                  {/* <Header /> */}
//                  <Switch>
//                     <Route render = {() => (<Redirect to ={ROUTER.HOME} />)} exact Component={HomeScreen} />
//                     {/* <Route render = {() => (<Redirect to ={ROUTER.CONTACT}/>)} /> */}
//                     {/* <PrivateRoute path={ROUTER.CONTACT} exact Component={ContactScreen} />  */}
//                     {/* <PrivateRoute path={ROUTER.HOME} exact Component={HomeScreen} />  */}
//                     {/* <Route path='/home' exact component={HomeScreen} /> */}
//                     {/* <PrivateRoute path='/'  Component={SearchScreen} /> */}
                
//                     </Switch>
//                 {/* <Footer /> */}
                
//             </ROUTER>
               
                
//             </>
//         )
//     }
// }
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
