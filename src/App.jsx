import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Destination from './components/destination/Destination'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'
import NotFound from './components/NotFound'
import Layout from './components/Layout'


function App() {


  return (
    <main className="min-h-screen bg-[url('/home/background-home-desktop.jpg')] bg-cover bg-center text-white">
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </main>
  )
}

export default App
