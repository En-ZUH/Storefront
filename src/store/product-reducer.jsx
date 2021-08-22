let initialState = {
    products: [
        {
            name: 'Peeling Solution Serum 30ml',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1606407157/N26595800A_1.jpg',
            category: 'Beauty',
            price: 7,
            inStock: 10,
        },
        {

            name: 'Bloom Nettare Di Fiori EDP 100ml',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1614100395/N19578553A_1.jpg',
            category: 'Fragrance',
            price: 200,
            inStock: 7,
        },
        {

            name: 'Addict EDP 50ml',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1613998364/N11201038A_2.jpg',
            category: 'Fragrance',
            price: 250,
            inStock: 20,
        },
        {

            name: 'Velour Liquid Matte Lipstick Very Cherry',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1583836878/N30107468A_1.jpg',
            category: 'Beauty',
            price: 5,
            inStock: 18,
        },
        {
            name: 'Fit Me Concealer 30 Café',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1625723061/N11034410A_1.jpg',
            category: 'Beauty ',
            price: 20,
            inStock: 14,
        },
        {
            name: 'Libre EDP 90ml',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1613750669/N31126632A_1.jpg',
            category: 'Fragrance',
            price: 300,
            inStock: 5,
        },
        {

            name: 'Black Opium EDP 90ml',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1614100502/N11201412A_1.jpg',
            category: 'Fragrance',
            price: 250,
            inStock: 10,
        },
        {

            name: 'Gift Set Damask Rose',
            url: 'https://z.nooncdn.com/products/tr:n-t_80/v1577190755/N29880835A_13.jpg',
            category: 'Beauty',
            price: 40,
            inStock: 10,
        },
    ],
    count: 0,
};

const products = (state = initialState, action) => {
    let { typename, payload } = action;
    switch (typename) {
        case 'ACTIVE':
            let products = initialState.products.filter((product) =>
                product.category === payload ? product.category : null
            );
            return { products, count: state.count };
        case 'INCREMENT':
            const count = state.count + 1;
            return { products: state.products, count };
        default:
            return state;
    }
};

export default products;

export const active = (categoryName) => {
    return {
        typename: 'ACTIVE',
        payload: categoryName,
    };
};

export const increment = () => {
    return {
        typename: 'INCREMENT',
    };
};
