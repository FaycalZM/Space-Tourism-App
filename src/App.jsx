import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Destination from './components/destination/Destination'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import { useData } from './context/DataProvider'
import DestinationDetails from './components/destination/DestinationDetails'
import CrewDetails from './components/crew/CrewDetails'


function App() {

  const { backgroundImage } = useData();

  return (
    <main
      style={{
        '--desktop-image-url': `url('${backgroundImage}-desktop.jpg')`,
        '--tablet-image-url': `url('${backgroundImage}-tablet.jpg')`,
        '--mobile-image-url': `url('${backgroundImage}-mobile.jpg')`,

      }}
      className={`main-page min-h-screen text-white
          desktop:bg-[image:var(--desktop-image-url)] tablet:bg-[image:var(--tablet-image-url)] bg-cover bg-center`}>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/destination' element={<Destination />}>
            <Route index element={<DestinationDetails />} />
            <Route path=':destinationName' element={<DestinationDetails />} />
          </Route>
          <Route path='/crew' element={<Crew />}>
            <Route index element={<CrewDetails />} />
            <Route path=':crewMemberName' element={<CrewDetails />} />
          </Route>
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </main>
  )
}

export default App
