import React from 'react';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
      	
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
