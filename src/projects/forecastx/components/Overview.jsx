import '../styles/project.css'

const overview = [
  { metric: 'Total Rows', value: '1,048,575' },
  { metric: 'Total Demand', value: '5,145,333,321' },
  { metric: 'Warehouses', value: '4 (Whse_A, Whse_C, Whse_J, Whse_S)' },
  { metric: 'Product Categories', value: '33' },
  { metric: 'Products', value: '2,160' },
  { metric: 'Date Range', value: '2011-01-08 to 2017-01-09' },
]

const topCategories = [
  { name: 'Category_019', demand: '4,251,207,605' },
  { name: 'Category_006', demand: '405,579,330' },
  { name: 'Category_005', demand: '199,681,320' },
  { name: 'Category_007', demand: '128,691,531' },
  { name: 'Category_028', demand: '49,150,112' },
]

const topProducts = [
  { code: 'Product_1359', demand: '472,474,000' },
  { code: 'Product_1248', demand: '289,117,000' },
  { code: 'Product_0083', demand: '210,651,000' },
  { code: 'Product_1341', demand: '169,777,000' },
  { code: 'Product_1295', demand: '123,303,000' },
]

function Overview() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">Dataset Overview</h2>
      <table className="data-table">
        <tbody>
          {overview.map((item) => (
            <tr key={item.metric}>
              <td><strong>{item.metric}</strong></td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="sub-title">Top 5 Categories by Total Demand</h3>
      <table className="data-table">
        <thead>
          <tr><th>Category</th><th>Demand</th></tr>
        </thead>
        <tbody>
          {topCategories.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.demand}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="sub-title">Top 5 Products by Total Demand</h3>
      <table className="data-table">
        <thead>
          <tr><th>Product Code</th><th>Demand</th></tr>
        </thead>
        <tbody>
          {topProducts.map((p) => (
            <tr key={p.code}>
              <td>{p.code}</td>
              <td>{p.demand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Overview
