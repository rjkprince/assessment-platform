import React from 'react';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Topic from './components/Topic/Topic'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ProblemList from './components/ProblemList/ProblemList';
import Classroom from './components/Classroom/Classroom'
import ClassModule from './components/Classroom/ClassModule/ClassModule';
import CurriculumPage from './components/Classroom/CurriculumPage/CurriculumPage';
import SessionPage from './components/Classroom/CurriculumPage/SessionPage/SessionPage';
import SessionRecord from './components/Classroom/CurriculumPage/SessionRecord/SessionRecord';
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
          <Route exact path="/module/:id" component={ClassModule}/>
          <Route exact path="/:batchId/weekly-curriculum/:weekId" component={CurriculumPage}/>
          <Route exact path="/sessionpage/:sessionId/" component={SessionPage}/>
          <Route exact path="/sessionrecord/:recordId" component={SessionRecord}/>
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
