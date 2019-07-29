import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  
  render(){
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />
    </div>
  );
  }
}

export default App;
