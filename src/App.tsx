import { BrowserRouter as Router } from 'react-router'
import { Home } from './pages/home'
import { Game } from './pages/game'
import { AppRouter } from './router'

function App() {
  return (
    <Router>
      <div className='bg-amber-400 flex items-center justify-center h-full'>
        <AppRouter />
      </div>
    </Router>
  )
}

export default App
