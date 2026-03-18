import '../styles/project.css'

const queries = [
  {
    title: 'Total Demand per Warehouse',
    question: 'Which warehouse handles the most volume?',
    sql: `SELECT Warehouse,
       SUM(Order_Demand) AS total_demand,
       COUNT(*) AS order_count,
       AVG(Order_Demand) AS avg_demand
FROM demand
GROUP BY Warehouse
ORDER BY total_demand DESC;`
  },
  {
    title: 'Monthly Demand Trend',
    question: 'How does demand vary month by month?',
    sql: `SELECT strftime('%Y-%m', Date) AS month,
       SUM(Order_Demand) AS monthly_demand
FROM demand
WHERE Date IS NOT NULL
GROUP BY month
ORDER BY month;`
  },
  {
    title: 'Top 10 Products',
    question: 'Which products generate the most demand?',
    sql: `SELECT Product_Code,
       SUM(Order_Demand) AS total_demand
FROM demand
GROUP BY Product_Code
ORDER BY total_demand DESC
LIMIT 10;`
  },
  {
    title: 'Warehouse × Category Breakdown',
    question: 'What are the top combinations?',
    sql: `SELECT Warehouse,
       Product_Category,
       SUM(Order_Demand) AS total_demand
FROM demand
GROUP BY Warehouse, Product_Category
ORDER BY total_demand DESC
LIMIT 10;`
  },
]

function SQLSection() {
  return (
    <div className="section-wrap">
      <h2 className="section-title">SQL Analysis</h2>
      <p className="section-desc">15 analytical queries run on the cleaned dataset using SQLite.</p>
      {queries.map((q) => (
        <div key={q.title} className="sql-card">
          <h3 className="sub-title">{q.title}</h3>
          <p className="section-desc">{q.question}</p>
          <pre className="sql-block">{q.sql}</pre>
        </div>
      ))}
    </div>
  )
}

export default SQLSection
