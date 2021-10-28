// Core
//eslint-dibable-next-line import/no-

import { applyMiddleware , createStore} from "redux";
// eslint-disable-next-line import/no-unresolved
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// Instruments
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { middleware, sagaMiddleware } from "./middleware";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
