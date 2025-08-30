import NavBar from './components/NavBar.jsx'

import Home from './pages/Home.jsx'
import Account from './pages/Account.jsx'
import Settings from './pages/Settings.jsx'
import AccountSettings from './pages/AccountSettings.jsx'
import Info from './pages/Info.jsx'

import './css/App.css'

import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="main-page">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
