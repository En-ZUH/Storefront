import './App.css';
import React from 'react';
//import Active from './Components/store/Active.jsx';
import Header from './Components/Header/Header.jsx';
import Body from './Components/store/Store';
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Body />
      {/* <Active /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
