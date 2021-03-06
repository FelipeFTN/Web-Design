import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }) // https://www.youtube.com/watch?v=fL8cFqhTHwA&ab_channel=BrianDesign ---> 33:03
    }
    handleSignIn = () => {
        window.location.href = "http://localhost:3000/login"
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Hippocampus <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.handleSignIn}>Entrar</Button>
            </nav>
        )
    }
}
export default Navbar