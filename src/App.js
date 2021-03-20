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
import Login from  './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from './Components/AppRoute/PrivateRoute';
import CheckOut from './Components/CheckOutForm/CheckOut';

const App = ({ current }) => {
  // console.log(props)
  return (
    <Router>
      <div>
        <Home />

        <Switch>
         <Route path="/cart" component={Cart}></Route>
         <PrivateRoute path="/checkout" component={CheckOut}></PrivateRoute>
         <Route path="/favouriteitem" component={Favourite}></Route>
         <PrivateRoute path="/postitem" component={PostItem}></PrivateRoute>
         <Route path="/login" component={Login}></Route>
         <Route path="/signup" component={SignUp}></Route>
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
