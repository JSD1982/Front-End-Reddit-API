import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Provider } from "react-redux";
import { store } from "./state/store";
import './styles/normalize.css';
import './styles/style.css';
const App = () =>
{
  return (
    <div className="App">
      <Home />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


