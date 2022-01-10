import { createStore, applyMiddleware } from "redux";
import logger, { createLogger } from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "../root-reducer";

const middlewares = createLogger(logger);

const store = createStore(rootReducer, applyMiddleware(middlewares));

const persistor = persistStore(store);

export { store, persistor };
