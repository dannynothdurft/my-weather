import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./reducer/location";

export default configureStore({
  reducer: {
    location: locationReducer,
  },
});
