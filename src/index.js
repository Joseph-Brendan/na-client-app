import React from 'react';
import ReactDOM from 'react-dom';
import "./app/layout/styles.css"
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';

const rootestVar = document.getElementById('root')
const render = () =>{
  ReactDOM.render(<App />, rootestVar)
}
if (module.hot){
  module.hot.accept('./app/layout/App.js', function(){
    setTimeout(render)
  })
}

render()
reportWebVitals();
