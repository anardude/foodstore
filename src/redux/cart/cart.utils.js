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