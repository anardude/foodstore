export const addItemToCart = (carItems, cartItemToAdd) => {
    const existingCartItem = carItems.find(
        carItem => carItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return carItems.map(carItem => 
            carItem.id === cartItemToAdd.id
            ? {...carItem, quantity: carItem.quantity + 1 }
            : carItem
        );
    }

    return [...carItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (carItems, cartItemToRemove) => {
    const existingCartItem = carItems.find(
        carItem => carItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return carItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return carItems.map(carItem => 
        carItem.id === cartItemToRemove.id
        ? {...carItem, quantity: carItem.quantity - 1 }
        : carItem
    );
};