
import { AppRouter } from './router'

function App() {
  return (
    <div className='bg-amber-400 flex pt-20 flex-col items-center h-full'>
      <h1 className="text-sky-950 text-6xl font-medium uppercase pb-6"> Tic Tac Toe</h1>
      <AppRouter />
    </div>
  )
}

export default App
