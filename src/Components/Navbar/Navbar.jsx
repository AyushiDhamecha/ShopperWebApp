import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textdecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li> {menu === "shop" ? <h /> : <></>}
                <li onClick={() => { setMenu("mens") }}><Link style={{ textdecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textdecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textdecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{ textdecoration: 'none' }} to='/login'><button>Login</button></Link>
                <Link style={{ textdecoration: 'none' }} to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
