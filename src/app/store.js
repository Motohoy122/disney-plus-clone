import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import userReducer from '../features/user/userSlice';

export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});