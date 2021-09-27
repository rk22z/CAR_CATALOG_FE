import React from 'react';
import ManufacturerList from './components/ManufacturerList';

import APIContextProvider from './contexts/APIContext';


function App() {

  return (
    <div className="App">
      <h1>Car Catalog</h1>
      <APIContextProvider>
       <ManufacturerList />
      </APIContextProvider>
    </div>
  );
}

export default App;
