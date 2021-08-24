let initialState = {
    categories: [
        {
            name: 'clothing',
            display_name: 'Baby',
            description: 'Welcome to Clothes Section',
        },
        {
            name: 'electronics',
            display_name: 'Smart devices',
            description: 'Welcome to Electronics Section',
        },
        {
            name: 'food',
            display_name: 'Snacks',
            description: 'Welcome to Food Section',
        },
    ],
    typeName: {},
};

const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let typeName = initialState.categories.find((category) => category.name === payload);
            return { categories: initialState.categories, typeName };
        default:
            return state;
    }
};

export default categories;


