import React from 'react';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import "tailwindcss/tailwind.css"
import Footer from './Components/Footer'

function App() {
  return (
   <div>
     <Header />
     <HelloWorld name="binod Tharu"/>
     <Footer/>
    </div>
  );
}
export default App;