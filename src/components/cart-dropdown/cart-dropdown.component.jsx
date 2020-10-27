import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropDdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>CO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDdown;