let initialState = {
    products: [
        {
            name: 'Peeling Solution Serum 30ml',
            url: 'https://ae01.alicdn.com/kf/H5e9cc23f51814ea3bbb6fd36bd01f3ebE/10-Minutes-Exfoliating-Face-The-Ordinary-AHA-30-BHA-2-Peeling-Solution-30ml-Facial-Serum-Remove.jpg',
            category: 'Beauty',
            price: 7,
            inStock: 10,
        },
        {

            name: 'Bloom Nettare Di Fiori EDP 100ml',
            url: 'https://fimgs.net/mdimg/perfume/375x500.50572.jpg',
            category: 'Fragrance',
            price: 200,
            inStock: 7,
        },
        {

            name: 'Addict EDP 50ml',
            url: 'http://cdn.shopify.com/s/files/1/0329/5346/7019/products/I14_1200x1200.jpg?v=1584213742',
            category: 'Fragrance',
            price: 250,
            inStock: 20,
        },
        {

            name: 'Velour Liquid Matte Lipstick Very Cherry',
            url: 'https://faveable.com/wp-content/uploads/2021/01/Best-Lipstick-1024x682.jpg',
            category: 'Beauty',
            price: 5,
            inStock: 18,
        },
        {
            name: 'Fit Me Concealer 30 Café',
            url: 'https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE4bHVUTEdWakwuX1NMMTUwMF8uanBn.jpg',
            category: 'Beauty ',
            price: 20,
            inStock: 14,
        },
        {
            name: 'Libre EDP 90ml',
            url: 'https://www.brandfield.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/3/6/3614272648425.jpg',
            category: 'Fragrance',
            price: 300,
            inStock: 5,
        },
        {

            name: 'Black Opium EDP 90ml',
            url: 'https://www.parfumdo.com/38254-thickbox_default/black-opium-vaporisateur-eau-de-parfum.jpg',
            category: 'Fragrance',
            price: 250,
            inStock: 10,
        },
        {

            name: 'Gift Set Damask Rose',
            url: 'https://z.nooncdn.com/products/tr:n-t_400/v1577190755/N29880835A_13.jpg',
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
