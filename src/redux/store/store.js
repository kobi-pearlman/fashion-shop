import { createStore, applyMiddleware } from "redux";
import logger, { createLogger } from "redux-logger";

import rootReducer from "../root-reducer";

const middlewares = createLogger(logger);

const store = createStore(rootReducer, applyMiddleware(middlewares));

export default store;
