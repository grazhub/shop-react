import { BrowserRouter } from 'react-router-dom'
import PagesRouter from './pages/PagesRouter'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div>
                <PagesRouter />
            </div>
        </BrowserRouter>
    )
}

export default App
