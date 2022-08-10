import React from 'react';
import About from './pages/About';
import bleh from './utils/bleh';

const App = () => {
  bleh();

  return (
    <section className="App">
      <About />
    </section>
  );
}

export default App;