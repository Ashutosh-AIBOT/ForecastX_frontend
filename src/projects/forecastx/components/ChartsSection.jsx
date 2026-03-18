import '../styles/project.css'

const images = [
  { src: '/images/forecastx/10_actual_vs_predicted.png', alt: 'All that images ss in MY github repo and visualization.ipynb file' },
]

function ChartsSection() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Visualizations</h2>
      <p className="section-desc">
        All plots generated during EDA and modeling. Images saved from the analysis notebooks.
      </p>
      <div className="chart-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="chart-box">
            <img src={img.src} alt={img.alt} style={{ width: '100%', borderRadius: '8px' }} />
            <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>{img.alt}</p>
          </div>
        ))}
      <a href="https://github.com/Ashutosh-AIBOT/ecommerce-analytics" target="_blank" className="github-link-btn">
        View Excel Dashboard on GitHub
      </a>
  
      </div>
    </div>
    
  )
}

export default ChartsSection
