import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import ProjectBanner from '../projects/forecastx/components/ProjectBanner'
import ProjectNavbar from '../projects/forecastx/components/ProjectNavbar'
import Overview from '../projects/forecastx/components/Overview'
import DataCleaning from '../projects/forecastx/components/DataCleaning'
import ChartsSection from '../projects/forecastx/components/ChartsSection'
import SQLSection from '../projects/forecastx/components/SQLSection'
import ExcelSection from '../projects/forecastx/components/ExcelSection'
import PowerBISection from '../projects/forecastx/components/PowerBISection'
import MLModel from '../projects/forecastx/components/MLModel'
import Insights from '../projects/forecastx/components/Insights'
import Footer from '../components/Footer'
import '../projects/forecastx/styles/project.css'

function ForecastxProject() {
  return (
    <div className="project-page">
      <Navbar />
      <Projects />
      <ProjectBanner />
      <ProjectNavbar />
      <div className="project-sections">
        <section id="overview"><Overview /></section>
        <section id="cleaning"><DataCleaning /></section>
        <section id="charts"><ChartsSection /></section>
        <section id="sql"><SQLSection /></section>
        <section id="excel"><ExcelSection /></section>
        <section id="powerbi"><PowerBISection /></section>
        <section id="model"><MLModel /></section>
        <section id="insights"><Insights /></section>
      </div>
      <Footer />
    </div>
  )
}

export default ForecastxProject
