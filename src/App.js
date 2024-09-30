import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';
import ServiceScreen from './screens/ServiceScreen';
import ContactScreen from './screens/ContactScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import LeadScreen from './screens/LeadScreen';
import NoMatch from './components/NoMatch';

const App = React.memo(() => {
  return (
    <Router>
      <Header />
      <Container fluid className='p-0 mt-5'>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/about' exact component={AboutScreen} />
          <Route path='/projects' exact component={ProjectsScreen} />
          <Route path='/projects/:id' component={ProjectDetailScreen} />
          <Route path='/lead-based-paint' exact component={LeadScreen} />
          <Route path='/services' exact component={ServiceScreen} />
          <Route path='/services/:id' component={ServiceDetailScreen} />
          <Route path='/contact' exact component={ContactScreen} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
});

export default App;
