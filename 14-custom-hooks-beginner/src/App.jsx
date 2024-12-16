import useOnlineStatus from './hooks/onlineStatus';

function App() {
  const { isOnline, setIsOnline } = useOnlineStatus();

  return (
    <>
      <button onClick={() => setIsOnline((prevState) => !prevState)}>{isOnline ? 'Go offline' : 'Go online'}</button>
      <h1>{isOnline ? '✅ Online' : '❌ Offline'}</h1>
    </>
  )
}

export default App;