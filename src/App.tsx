import { Route, Routes } from 'react-router-dom'
import Form from './form/Form'
import Table from './table/Table'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/tabel" element={<Table />} />
    </Routes>
  )
}
