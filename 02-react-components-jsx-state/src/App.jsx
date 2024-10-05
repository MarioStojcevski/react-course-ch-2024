import reactLogo from './assets/react.svg';
import libraries from './utils/libraries';
import angularLogo from '/angular.png';
import Card from "./components/Card";
import viteLogo from '/vite.svg';
import qwikLogo from '/qwik.png';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{ color: '#545454' }}>Vite + React + Angular + Qwik</h1>

      <div style={{ display: 'inline-flex'}}>
        <Card 
          name={'vite'} 
          logo={viteLogo}
          url={libraries.vite.url} 
          alt={libraries.vite.description} />
        <Card 
          name={'react'} 
          logo={reactLogo} 
          url={libraries.react.url} 
          alt={libraries.react.description} />
        <Card 
          name={'angular'} 
          logo={angularLogo} 
          url={libraries.angular.url} 
          alt={libraries.angular.description} />
        <Card 
          name={'qwik'} 
          logo={qwikLogo} 
          url={libraries.qwik.url} 
          alt={libraries.qwik.description} />
      </div>
      
    </div>
  )
}

export default App;
