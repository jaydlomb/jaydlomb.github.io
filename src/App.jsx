import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

//unique project pages
import DSPage from './pages/project-pages/dsPage'
import ChymaPage from './pages/project-pages/ChymaPage'
import GOAPPage from './pages/project-pages/GOAPPage'
import KLPage from './pages/project-pages/KnightLightPage'
import SFPage from './pages/project-pages/SnowboardFreePage'
import VVPage from './pages/project-pages/VirusVenturePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/ds" element={<DSPage />} />
        <Route path="projects/chyma" element={<ChymaPage />} />
        <Route path="projects/goap" element={<GOAPPage />} />
        <Route path="projects/knightlight" element={<KLPage />} />
        <Route path="projects/snowboardfree" element={<SFPage />} />
        <Route path="projects/virusventure" element={<VVPage />} />
      </Route>
    </Routes>
  )
}