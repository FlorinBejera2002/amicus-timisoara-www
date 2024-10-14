import { useState, useRef, useEffect } from "react";
import logo from '/Logo-AMiCUS-TM.png';
import './Table.scss';

const APIdata: Data[] = [
    {
        name: 'Andrei',
        email: 'exemplu@email.com',
        phone: '0723456789',
        address: 'Str. Exemplu nr. 1',
        isMember: true,
        faculty: 'Facultatea de Exemplu',
        studyYear: 'Anul 1',
        department: 'Departamentul de Exemplu',
        university: 'Universitatea de Exemplu',
        dateOfBirth: '2000-01-01',
        achitat: 50
    },
    {
        name: 'Maria',
        email: 'exemplu@email.com',
        phone: '0723456789',
        address: 'Str. Exemplu nr. 1',
        isMember: true,
        faculty: 'Facultatea de Exemplu',
        studyYear: 'Anul 1',
        department: 'Departamentul de Exemplu',
        university: 'Universitatea de Exemplu',
        dateOfBirth: '2000-01-01',
        achitat: 100
    }
];

export default function Table() {
    const [date, setDate] = useState<Data[]>(APIdata);
    const [length, setLength] = useState(0);
    const [search, setSearch] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'f' && document.activeElement !== inputRef.current) {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="table-page">
            <div className="top">
                <img src={logo} alt="" className="logo-amicus-tm" />

                <div className="searchbar">
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder='Apasă tasta "F"' className="search" ref={inputRef} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div className="table">
                <div className="row header">
                    <div className="cell name"><h3>Nume</h3></div>
                    <div className="cell email"><h3>Email</h3></div>
                    <div className="cell phone"><h3>Telefon</h3></div>
                    <div className="cell address"><h3>Adresă</h3></div>
                    <div className="cell is-member"><h3>Membru</h3></div>
                    <div className="cell faculty"><h3>Facultate</h3></div>
                    <div className="cell study-year"><h3>Anul</h3></div>
                    <div className="cell department"><h3>Departament</h3></div>
                    <div className="cell university"><h3>Universitate</h3></div>
                    <div className="cell date-of-birth"><h3>Data nașterii</h3></div>
                    {/* <div className="cell achitat"><h3>Achitat</h3></div> */}
                </div>

                <div className="rows">
                    {date.filter((data) => {
                        if (search === '') {
                            return data;
                        } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
                            return data;
                        }
                    }).map((data, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="cell name"><h3>{data.name}</h3></div>
                                <div className="cell email"><h3>{data.email}</h3></div>
                                <div className="cell phone"><h3>{data.phone}</h3></div>
                                <div className="cell address"><h3>{data.address}</h3></div>
                                <div className="cell is-member"><h3>{data.isMember ? 'Da' : 'Nu'}</h3></div>
                                <div className="cell faculty"><h3>{data.faculty}</h3></div>
                                <div className="cell study-year"><h3>{data.studyYear}</h3></div>
                                <div className="cell department"><h3>{data.department}</h3></div>
                                <div className="cell university"><h3>{data.university}</h3></div>
                                <div className="cell date-of-birth"><h3>{data.dateOfBirth}</h3></div>
                                {/* <div className="cell achitat"><h3>{data.achitat} RON</h3></div> */}
                            </div>
                        )
                    })}
                </div>
                
                {date.length === 0 && <div className="no-data">Nu există date</div>}

                {/* <div className="row footer">
                    <h3>Total achitat: {date.reduce((acc, curr) => acc + curr.achitat, 0)} RON ({date.reduce((acc, curr) => acc + (curr.achitat > 0 ? 1 : 0), 0)}/{date.length})</h3>
                </div> */}
            </div>
        </div>
    )
}

interface Data {
    name: string,
    email: string,
    phone: string,
    address: string,
    isMember: boolean,
    faculty: string,
    studyYear: string,
    department: string,
    university: string,
    dateOfBirth: string,
    achitat?: number
}
