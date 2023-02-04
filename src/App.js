import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Data from './data.js'

function App() {

  const items = Data.map(function (item) {
    return(
      <Main 
      key = {item.id}
      item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div>
      {items}
      </div>
    </div>
  );
}

export default App;
