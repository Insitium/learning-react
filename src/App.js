import React from 'react';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import "tailwindcss/tailwind.css"

function App() {
  return (
   <div>
     <Header />
     <HelloWorld name="binod Tharu"/>
    </div>
  );
}
export default App;