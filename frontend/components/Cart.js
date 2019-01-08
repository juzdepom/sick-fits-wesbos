import React from 'react';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';

const Cart = () => (
    <CartStyles open>
        <header>
            <CloseButton title="close">&times;</CloseButton>
            <Supreme>Your Cart</Supreme>
            <p>You have xx items in your cart</p>
            <footer>
                <p>$10.10</p>
            </footer>
        </header>
    </CartStyles>
);

export default Cart;

