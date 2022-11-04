import { configureStore, combineReducers } from "@reduxjs/toolkit";
import nowPlayingReducer from "./components/redux/nowPlayingSlide.js";
import comingSoonReducer from "./components/redux/comingSoonSlide.js";
import DetailReducer from "./components/redux/DetailSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// export const store = configureStore({
//   reducer: {
//     data: nowPlayingReducer,
//     comingsoon: comingSoonReducer,
//     databyid: DetailReducer,
//   },
// });

const persistConfig = {
  key: "movie",
  storage,
};

const rootReducer = combineReducers({
  data: nowPlayingReducer,
  comingsoon: comingSoonReducer,
  databyid: DetailReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
