import React from 'react';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Topic from './components/Topic/Topic'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ProblemList from './components/ProblemList/ProblemList';
import Classroom from './components/Classroom/Classroom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard/:id' component={Topic}/>
          <Route exact path='/courses/:title/:titleId/:id' component={ProblemList}/>
            <Route exact path='/Classroom' component={Classroom} />
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
