import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='HeaderContainer'>
            <p className='NavLeft'><h1>FLOWER&TT</h1></p>
            <ul className='NavRight'>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link >
                <Link className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        SHOP
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/shop/hoabinh">
                            <a className="dropdown-item" >
                                Hoa Binh
                            </a>
                        </Link>
                        <Link to="/shop/hoabo">
                            <a className="dropdown-item" >
                                Hoa Bo
                            </a>
                        </Link>
                        <Link to="/shop/hoagio">
                            <a className="dropdown-item" >
                                Hoa gio
                            </a>
                        </Link>
                    </ul>
                </Link>
                <Link to="/cart">CART</Link >
            </ul>
        </div>
    )
}
