
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';

//
import Layout from './components/common/Layout'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar/>
      
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen} />
          {/* <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={SignUp} /> */}
        </Switch>
      </main>
    </Router>

  );
}

export default App;
