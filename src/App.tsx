import { Routes, Route } from 'react-router-dom';
import Table from './table/Table';
import Form from './form/Form';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/tabel" element={<Table />} />
        </Routes>
    );
}
