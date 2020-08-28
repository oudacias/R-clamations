import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/left-menu.css';


export default class LeftMenu extends Component{
    componentDidMount(){
        function scrollNav() {
            $('.nav a').click(function(){
              $(".active").removeClass("active");     
              $(this).addClass("active");
              
              $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
              }, 300);
              return false;
            });
          }
          scrollNav();
    }

    render() {
        return (
            <nav className="nav">
                <div className="wui-side-menu open pinned">   
                    <ul className="wui-side-menu-items">
                        <li>
                            <a href="#s1" >
                                <img src={require("../images/ios_icons/info.png")} width="40px"/>
                            </a>
                        </li>
                        <hr className="hr-menu"/>
                        <li>
                            <a href="#s2" >
                                <img src={require("../images/ios_icons/checkall.png")} width="40px"/>
                            </a>
                        </li>
                        <hr className="hr-menu"/>
                        <li>
                            <a href="#s3" >
                                <img src={require("../images/ios_icons/chart.png")} width="40px"/>
                            </a>
                        </li>
                        <hr className="hr-menu"/>
                        <li>
                            <a href="#s4" >
                                <img src={require("../images/ios_icons/search.png")} width="40px"/>
                            </a>
                        </li>
                        <hr className="hr-menu"/>
                        <li>
                            <a href="#s5">
                                <img src={require("../images/ios_icons/inbox.png")} width="40px"/>
                            </a>
                        </li>
                        <hr className="hr-menu"/>
                            <li>
                            <a href="#s6" >
                                <img src={require("../images/ios_icons/email.png")} width="40px"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
if (document.getElementById('leftmenu')) {
    ReactDOM.render(<LeftMenu />, document.getElementById('leftmenu'));
}
