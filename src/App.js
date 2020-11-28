import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ProjectScreen from './screens/ProjectScreen';
import ServiceScreen from './screens/ServiceScreen';
import ContactScreen from './screens/ContactScreen';
import EstimateScreen from './screens/EstimateScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid className='p-0'>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/about' component={AboutScreen} />
            <Route path='/projects' exact component={ProjectsScreen} />
            <Route path='/projects/:id' component={ProjectScreen} />
            <Route path='/services' component={ServiceScreen} />
            <Route path='/contact' component={ContactScreen} />
            <Route path='/estimate' component={EstimateScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
