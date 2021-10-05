import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsList from './components/list/ProductsList';
import ProductItem from './components/item/ProductItem';



function App() {

  return (
      <BrowserRouter>
        <div className="App">

        <header className="header">
          <a className="header-title" href="/productList-nodeJS-mongoDB/">Product List</a>
        </header>
          <main>
            <Switch>
              <Route exact path='/productList-nodeJS-mongoDB/' component={ProductsList}/>
              <Route path='/product/:id' component={ProductItem}/>
            </Switch>
          </main>
        <footer>
          <div className="foote-box">
            <h1> DEVELOPER: OLEH KALYNOVSKYI </h1>
            <a href="mailto:oleh.kalynovskyi@gmail.com">Contact me: oleh.kalynovskyi@gmail.com</a>
            <a href="https://github.com/oleh-kalynovskyi">My portfolio on Github</a>
          </div>
        </footer>

        </div>
      </BrowserRouter>
  );
}
export default App;
