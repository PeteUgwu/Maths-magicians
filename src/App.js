import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Quotes from './pages/Quote';

// Components
import Navbar from './components/Navbar';
import MyCalculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/calculator" element={<MyCalculator />} />
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quotes />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
