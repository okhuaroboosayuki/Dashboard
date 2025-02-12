const DarkModeReducer = (state, action) => {
    switch (action.type) {
        case 'LIGHT_MODE':
            return {
                ...state,
                darkMode: false
            };
        case 'DARK_MODE':
            return {
                ...state,
                darkMode: true
            };
        case 'TOGGLE_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};

export default DarkModeReducer;