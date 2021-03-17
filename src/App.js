import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Items from './Components/Items/Items';
import ProductItem from './Components/ProductItem/ProductItem';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Favourite from './Components/FavouriteItem/Favourite';
import PostItem from './Components/PostItem/PostItem';

const App = ({ current }) => {
  // console.log(props)
  return (
    <Router>
      <div>
        <Home />

        <Switch>
         <Route path="/cart" component={Cart}></Route>
         <Route path="/favouriteitem" component={Favourite}></Route>
         <Route path="/postitem" component={PostItem}></Route>
         <Route exact path="/" component={Items}></Route>
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/item/:id" component={ProductItem}></Route>
          )}
       </Switch>

      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
