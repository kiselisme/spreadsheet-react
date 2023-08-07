import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select'
import './style.css'

function App() {
  const options = [
    {label: 'Project profit', value: 'project_profit'},
    {label: 'Books', value: 'books'},
    {label: 'Products', value: 'products'},
]

const [selectedData, setSelectedData] = useState(options[0])
const [data, setData] = useState({header:[], data:[]})


useEffect(() => {
  async function fetchData() {
    const response = await fetch(`http://localhost:3001/${selectedData.value}`)
    const json = await response.json()
    setData(json)
  }
  fetchData()
}, [selectedData])
useEffect(() => console.log(data), [data])


const changeData = (option) => {setSelectedData(option)}

return (
  <div className="App">
  <div>
  <main className='table'>
    <section className="table__header">
    <Select
      className="basic-single"
      classNamePrefix="select"
      name="db"
      defaultValue={selectedData}
      isLoading={false}
      options={options}
      onChange={changeData}
    />
    </section>
    <section className="table__body">
    <table>
      <thead className="thead">
        <tr>
        {
        data.header.map(item =>(<th key={item.id}>{item.caption}</th>))
        }
        </tr>
      </thead>
      <tbody className='tbody'>
          {
            data.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {
                  row.map((cell, cellIndex) => (
                    <td key={cellIndex} style={{ 'textAlign': data.header[cellIndex].align }}>{cell.d ?? cell}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
    </table>
    </section>
    </main>
  </div>
  </div>
)
}

export default App
