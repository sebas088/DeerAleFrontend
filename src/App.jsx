
import { Header } from './components/Header/Header';
import { ScreenSignUp } from './components/ScreenSignUp/ScreenSignUp'
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/sign-up' element={<ScreenSignUp/>}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
