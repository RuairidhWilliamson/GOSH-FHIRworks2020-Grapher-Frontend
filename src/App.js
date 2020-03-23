import React from 'react';
import Graph from './components/graphInterface';
import { Row, Col } from 'react-bootstrap';
import { Bar, Doughnut } from 'react-chartjs-2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div className="App">
    <Row>
      <Col style={{maxWidth: '50%'}}><Graph graph={Bar} dimension={'age'} groupSize={5} backgroundColor={'#E91E63'}/></Col>
      <Col style={{maxWidth: '50%'}}><Graph graph={Bar} dimension={'maritalStatus'} backgroundColor={'#1E88E5'}/></Col>
    </Row>
    <Row>
      <Col style={{maxWidth: '50%'}}><Graph graph={Doughnut} dimension={'gender'} backgroundColor={'#FB8C00'}/></Col>
      <Col style={{maxWidth: '50%'}}></Col>
    </Row>
  </div>;
}

export default App;
