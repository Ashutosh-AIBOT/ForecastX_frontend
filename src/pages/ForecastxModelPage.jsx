import Navbar from '../components/Navbar'
import ProjectNavbar from '../projects/forecastx/components/ProjectNavbar'
import EcomModel from '../projects/forecastx/components/EcomModel'
import Footer from '../components/Footer'
import '../projects/forecastx/styles/project.css'

function ForecastxModelPage() {
  return (
    <div className="project-page">
      <Navbar />
      <ProjectNavbar />
      <EcomModel />
      <Footer />
    </div>
  )
}

export default ForecastxModelPage
