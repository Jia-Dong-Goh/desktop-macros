import { useEffect } from 'react'
import { LandingView } from './views/LandingView'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  useEffect(() => {
    ipcHandle
  }, [])

  return (
    <>
      <LandingView />
    </>
  )
}

export default App
