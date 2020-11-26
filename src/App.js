import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectScreen from './screens/ProjectScreen';
import ServiceScreen from './screens/ServiceScreen';
import ContactScreen from './screens/ContactScreen';
import EstimateScreen from './screens/EstimateScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/about' component={AboutScreen} />
          <Route path='/projects' component={ProjectScreen} />
          <Route path='/services' component={ServiceScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/estimate' component={EstimateScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
