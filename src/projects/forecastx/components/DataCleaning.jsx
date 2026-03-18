import '../styles/project.css'

const steps = [
  { step: 'Raw Data Loaded', value: '1,048,575 rows | 5 columns' },
  { step: 'Date Parsing', value: 'Column converted to datetime, 11,239 null dates dropped' },
  { step: 'Order_Demand Cleaned', value: 'Parenthetical negatives (e.g., (100)) converted to positive numbers' },
  { step: 'Nulls Handled', value: 'Rows with null Order_Demand dropped' },
  { step: 'Categorical Cleanup', value: 'Product_Code, Warehouse, Product_Category stripped and trimmed' },
  { step: 'Final Shape', value: '1,048,575 rows | 5 columns' },
  { step: 'Time Features Added', value: 'year, month, quarter, day_of_week, day_of_year' },
]

function DataCleaning() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Data Cleaning</h2>
      <p className="section-desc">
        Raw CSV cleaned by fixing date formats, handling negative demand values, and removing nulls.
        Engineered temporal features for modeling.
      </p>
      <table className="data-table">
        <thead>
          <tr><th>Step</th><th>Result</th></tr>
        </thead>
        <tbody>
          {steps.map((s) => (
            <tr key={s.step}>
              <td>{s.step}</td>
              <td>{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataCleaning
