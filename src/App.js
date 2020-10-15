import React from 'react';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Topic from './components/Topic/Topic'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard/:id' component={Topic}/>
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
