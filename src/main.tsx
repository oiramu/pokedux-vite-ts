import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { pokemonsReducer } from './reducers/pokemons.ts'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import './index.css'

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
