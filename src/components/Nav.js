import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {ROUTER} from '@constants/Constant';
import {STRINGS} from '@constants/Strings';
class Nav extends React.Component{
    constructor(props){
      super(props);
      this.state = {
            color: "#007bff",
            isClick: true
      };
      this.handelClick=this.handelClick.bind(this);
    }
    handelClick(){ 
      this.setState({
        isClick :!this.state.isClick
      });
    }
    render(){
        /* nav-bar for website */
        let Color = null;
        if(this.state.isClick){
          Color = this.state.color;
        }
        return (
            <div className="row">
              <div className="col-12">
                <nav className="navbar  navbar-expand-lg  p-0 logo row">
                  <a className="navbar-brand col-8 col-lg-2" href="#"><img src="./images/logo.png" alt="logo" className="pb-3 mr-5" style={{height: '60px'}} /></a>
                  <div  className="icon-menu col-2" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <div id="wrapper" className="float-right">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                    </div>
                  </div>
                <div class="collapse navbar-collapse col-lg-10" id="collapsibleNavbar">
                  <ul className="navbar-nav ml-4 ">
                    <li className="nav-item  mr-3">
                      <Link to={ROUTER.HOME}  className = "nav-link">
                        {STRINGS.HOME}
                      </Link>
                    </li>
                    <li className="nav-item  mr-3">
                      <Link to={ROUTER.INTRODUCE} className="nav-link ">
                        {STRINGS.INTRODUCE}
                      </Link>
                    </li>
                    <li className="nav-item  mr-3 ">
                      <Link to={ROUTER.SEARCHORDER} className="nav-link ">
                            {STRINGS.SEARCH}
                      </Link>
                    </li>
                    <li className="nav-item  mr-3 ">
                      <Link to={ROUTER.SEARCHORDER} className="nav-link ">
                        {STRINGS.PRICETABLE}
                      </Link>
                    </li>
                    <li className="nav-item mr-3 border-bottom-0">
                      <Link to={ROUTER.CONTACT} className="nav-link ">
                        {STRINGS.CONTACT}
                      </Link>  
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          );
    }
}
export default Nav;
