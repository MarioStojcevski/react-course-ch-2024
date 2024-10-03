import reactLogo from './assets/react.svg';
import angularLogo from '/angular.png';
import viteLogo from '/vite.svg';
import qwikLogo from '/qwik.png';

import './App.css';

import Slikicka from "./components/Slikicka";

function App() {
  const brojce = 5;

  return (
    <div>
      <h1>Vite + React + Angular + Qwik</h1>

      <div>
        {brojce === 3 && <p>brojce e stvarno 3</p>}
        <Slikicka logo={viteLogo} url={"https://www.google.com"} alt={"www.google.com"} />
        <Slikicka logo={reactLogo} url={"www.facebook.com"} alt={"www.facebook.com"} />
        <Slikicka logo={angularLogo} url={"www.instagram.com"} alt={"www.instagram.com"} />
        <Slikicka logo={qwikLogo} url={"www.pinterest.com"} alt={"www.pinterest.com"} />
      </div>
      
    </div>
  )
}

export default App;
