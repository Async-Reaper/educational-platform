declare type RootState = ReturnType<typeof import('./index').rootReducer>;
declare type AppStore = ReturnType<typeof import('./index').setupStore>;
declare type AppDispatch = AppStore['dispatch'];
