import '../styles/project.css'

function ProjectBanner() {
  return (
    <div className="project-banner">
      <span className="banner-tag">Project — Product Demand Forecasting</span>
      <h1 className="banner-title">ForecastX — Demand Forecasting</h1>
      <p className="banner-sub">
        End-to-end analysis on 1,048,575 order records from Kaggle's Historical Product Demand dataset.
      </p>
      <div className="banner-stats">
        <div className="bstat">
          <span>1.05M</span>
          <p>Total Rows</p>
        </div>
        <div className="bstat">
          <span>5.1B</span>
          <p>Total Demand</p>
        </div>
        <div className="bstat">
          <span>2,160</span>
          <p>Products</p>
        </div>
        <div className="bstat">
          <span>33</span>
          <p>Categories</p>
        </div>
      </div>
      <a href="https://github.com/Ashutosh-AIBOT/Forecasts-for-Product-Demand-full-Analysis" target="_blank" className="banner-btn">
        View on GitHub
      </a>
    </div>
  )
}

export default ProjectBanner
