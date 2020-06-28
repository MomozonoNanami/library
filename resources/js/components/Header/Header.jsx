import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
	constructor(props){
    super(props);
    this.state = {
    storage_url: process.env.MIX_STORAGE_URL,
    app_url: process.env.MIX_APP_URL
    }
    }

	render() {

		const storage_url = this.state.storage_url;
		const app_url = this.state.app_url;

		return (
			<div>
			<div className="site-mobile-menu site-navbar-target">
			<div className="site-mobile-menu-header">
			<div className="site-mobile-menu-close mt-3">
			<span className="icon-close2 js-menu-toggle"></span>
			</div>
			</div>
			<div className="site-mobile-menu-body"></div>
			</div>  

			<header className="site-navbar mt-3">
			<div className="container-fluid">
			<div className="row align-items-center">
			<div className="site-logo col-6"><NavLink  exact to={'/'} >Библиотека</NavLink></div>

			<nav className="mx-auto site-navigation">
			<ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
			<li>
			<NavLink exact to={'/'} className="nav-link active">Главная</NavLink>
			</li> 
			<li>
			<NavLink  exact to={'/books'} >Книги</NavLink>
			</li> 
			<li>
			<NavLink  exact to={'/blogs'}>Блог</NavLink>
			</li> 
			<li className="d-lg-none"><a href="/nova">Войти</a></li>
			</ul>
			</nav>

			<div className="right-cta-menu text-right d-flex aligin-items-center col-6">
			<div className="ml-auto">
			<a href="/nova" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Войти</a>
			</div>
			<a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></a>
			</div>

			</div>
			</div>
			</header>
			</div>
			)
	}
}

export default Header;
