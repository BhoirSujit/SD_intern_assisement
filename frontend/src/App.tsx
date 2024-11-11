import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import './App.css'
import UserManagement from './pages/UserManagement'
import Dashboard from './pages/Dashboard'
import UserRegistration from './pages/UserRegistration'

function App() {
  

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/register" element={<UserRegistration/>}/>
          <Route path="/manage" element={<UserManagement/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
