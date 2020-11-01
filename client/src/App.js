import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {

  function openMenu(){
    document.querySelector('.sidebar').classList.add('open')
  }
  function closeMenu(){
    document.querySelector('.sidebar').classList.remove('open')
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>Premium wheels</Link>
          </div>
          <div className="header-links">
            <a href="/">Cart</a>
            <a href="/">Sign-in</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li><a href="/">Pants</a></li>
            <li><a href="/">Shirts</a></li>
          </ul>
        </aside>


        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/product/:id" exact={true} component={ProductDetails}/>
            </Switch>
          </div>
        </main>

        <footer className="footer">
          All rights reserved 2020
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
