import { combineReducers } from 'redux';
import areArticlesBeingFetched from './areArticlesBeingFetched';
import articles from './articles';
import AppContainer from './App.container';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

export default combineReducers({
  areArticlesBeingFetched,
  articles,
});
