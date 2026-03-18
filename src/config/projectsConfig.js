export const PROJECTS_CONFIG = [
  {
    id: 'forecastx',
    name: 'ForecastX — Product Demand Forecasting',
    description: 'Time series forecasting on historical product demand. ARIMA, Prophet, LSTM, XGBoost models with trend analysis.',
    tech: ['Python', 'ARIMA', 'Prophet', 'LSTM', 'XGBoost', 'Streamlit'],
    status: 'done',
    folder: 'forecastx',
    github: 'https://github.com/Ashutosh-AIBOT/Forecasts-for-Product-Demand-full-Analysis',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'charts', label: 'Charts' },
      { id: 'sql', label: 'SQL' },
      { id: 'excel', label: 'Ms Excel' },
      { id: 'powerbi', label: 'Power BI' },
      { id: 'model', label: 'ML Model' },
      { id: 'insights', label: 'Insights' }
    ]
  },
  // other projects remain unchanged (ecommerce-analytics, metricflow, etc.)
  // If you want to remove ecommerce-analytics, delete or comment it out.
  {
    id: 'ecommerce-analytics',
    name: 'Ecommerce Sales & Customer Analytics',
    description: 'End-to-end analytics on 96,454 real orders from Olist dataset.',
    tech: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Power BI'],
    status: 'done',
    folder: 'ecommerce-analytics',
    github: 'https://github.com/Ashutosh-AIBOT/ecommerce-analytics',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'charts', label: 'Matplotlib Charts' },
      { id: 'sql', label: 'SQL' },
      { id: 'excel', label: 'Ms Excel' },
      { id: 'powerbi', label: 'Power BI' },
      { id: 'model', label: 'ML Model' },
      { id: 'insights', label: 'Insights' }
    ]
  }
]

export const getProjectById = (id) => {
  return PROJECTS_CONFIG.find(p => p.id === id)
}

export const getAllProjects = () => {
  return PROJECTS_CONFIG
}
