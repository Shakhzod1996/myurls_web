import './App.css';
import Header from './components/Header';

// Components
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Home from './components/Home';
import Faq from './components/Faq';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/howWorks' component={HowItWorks} />
          <Route path='/features' component={Features} />
          <Route path='/faq' component={Faq} />
          <Route path='/terms' component={Terms} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
