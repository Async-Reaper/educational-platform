import { setupStore } from 'app/store';
import React from 'react'
import { Provider } from 'react-redux';

const store = setupStore();

export const StoreProvider = (children: any) => 
    <Provider store={store}>{children}</Provider>
