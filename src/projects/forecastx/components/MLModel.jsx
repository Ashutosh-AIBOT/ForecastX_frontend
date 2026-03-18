import '../styles/project.css'

const models = [
  { name: 'Random Forest', r2: '0.82', mae: '390', rmse: '740', best: true },
  { name: 'Baseline (Mean)', r2: '0.00', mae: '--', rmse: '--' }
]

const features = [
  'year', 'month', 'quarter', 'day_of_week', 'day_of_year',
  'Warehouse (encoded)', 'Product Category (encoded)', 'Product Code (encoded)'
]

function MLModel() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">ML Model — Demand Forecasting</h2>
      <p className="section-desc">
        Random Forest Regressor trained on 1,048,575 order records. Time‑based 80/20 split simulates real‑world forecasting.
      </p>

      <table className="data-table">
        <thead>
          <tr><th>Model</th><th>R² Score</th><th>MAE</th><th>RMSE</th></tr>
        </thead>
        <tbody>
          {models.map((m) => (
            <tr key={m.name} className={m.best ? 'best-row' : ''}>
              <td>{m.name} {m.best && '⭐ Best'}</td>
              <td>{m.r2}</td>
              <td>{m.mae}</td>
              <td>{m.rmse}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="sub-title">Features Used</h3>
      <div className="info-grid">
        {features.map((f) => (
          <div key={f} className="info-card">
            <p>{f}</p>
          </div>
        ))}
      </div>

      <h3 className="sub-title">Model Artifacts</h3>
      <p className="section-desc">
        Trained model and label encoders are saved and can be used for inference.
      </p>
      <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.5rem' }}>
        <li>ml/rf_model.pkl — trained Random Forest</li>
        <li>ml/label_encoders.pkl — saved LabelEncoders</li>
      </ul>

      <a href="https://github.com/Ashutosh-AIBOT/Forecasts-for-Product-Demand-full-Analysis" target="_blank" className="github-link-btn">
        View ML Notebook on GitHub
      </a>
    </div>
  )
}

export default MLModel
