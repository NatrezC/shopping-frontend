import './Navbar.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';


const Navbar = ({ click }) => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2><strong>Shop<span className="title-letter">X</span></strong></h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                {/* <li>
                    <Link to="/login">
                        Login
                        
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        SignUp
                        
                    </Link>
                </li> */}
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo__badge">{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                        
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar
