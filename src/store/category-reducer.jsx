let initialState = {
    categories: [
        {
            name: 'Beauty',
            display_name: 'Beauty',
            description: 'Welcome to Beauty Section',
        },
        {
            name: 'Fragrance',
            display_name: 'Fragrance',
            description: 'Welcome to Fragrance Section',
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


