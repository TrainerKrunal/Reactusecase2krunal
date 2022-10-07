 
import './App.css'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AppNavBar from './components/pages/AppNavBar';
import CustomerPage from './components/pages/CustomerPage';

import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Person from './Person'

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){

    const myFunc=()=>{
      alert("1");
    }

  return(
    <div className='container'>
      <ToastContainer />
      <BrowserRouter>
        
          <AppNavBar />
          <br/>
          <hr/>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/customers" component={CustomerPage} />
              <Route path="/about" component={AboutPage} />

          </Switch>
      </BrowserRouter>
        
    </div>
  )
}

export default App


// import AlertFuncComp from './components/Alert'
// import Counter from './components/Counter'
// import HelloMessageComp  from './components/HelloMessage' 
// import HelloMessageClass from './components/HelloMessageClassComp'
// import CounterWithHooks from './components/reacthook'
// import SignIn from './components/SignIn'



 {/* <HelloMessageComp name="Krunal" message="I Love React" />
        <HelloMessageClass name="SCB" message="We too love React" />
        <AlertFuncComp />
        <Counter />
        <CounterWithHooks />  */}
        {/* <SignIn /> */}