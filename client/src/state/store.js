import globalReducer from "./index";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        global: globalReducer,
    },
})

export default store;
