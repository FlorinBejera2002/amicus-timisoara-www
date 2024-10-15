import { useState, useRef, useEffect } from "react";
import logo from '/Logo-AMiCUS-TM.png';
import './Table.scss';
import Modal from './modal/Modal';

const APIdata: Data[] = [
];

export default function Table() {
    const cellSpace = 110;
    const [date, setDate] = useState<Data[]>(APIdata);
    const [modalData, setModalData] = useState<Data>(APIdata[0]);
    const [showModal, setShowModal] = useState(true);
    const [search, setSearch] = useState('');
    const [tableWidth, setTableWidth] = useState(window.innerWidth);

    const inputRef = useRef<HTMLInputElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);

    useEffect(() => { // set tableWidth to the width of the table
        const handleResize = () => {
            setTableWidth(tableRef.current?.offsetWidth || window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

            <div className="table" ref={tableRef}>
                <div className="row header">
                    <div className={`cell name`}><h3>Nume</h3></div>
                    <div className={`cell ${(3 * cellSpace) < tableWidth ? '' : 'hide'} email`}><h3>Email</h3></div>
                    <div className={`cell ${(4 * cellSpace) < tableWidth ? '' : 'hide'} phone`}><h3>Telefon</h3></div>
                    <div className={`cell ${(5 * cellSpace) < tableWidth ? '' : 'hide'} address`}><h3>Adresă</h3></div>
                    <div className={`cell ${(6 * cellSpace) < tableWidth ? '' : 'hide'} is-member`}><h3>Membru</h3></div>
                    <div className={`cell ${(7 * cellSpace) < tableWidth ? '' : 'hide'} faculty`}><h3>Facultate</h3></div>
                    <div className={`cell ${(8 * cellSpace) < tableWidth ? '' : 'hide'} study-year`}><h3>Anul</h3></div>
                    <div className={`cell ${(9 * cellSpace) < tableWidth ? '' : 'hide'} department`}><h3>Departament</h3></div>
                    <div className={`cell ${(10 * cellSpace) < tableWidth ? '' : 'hide'} university`}><h3>Universitate</h3></div>
                    <div className={`cell ${(11 * cellSpace) < tableWidth ? '' : 'hide'} date-of-birth`}><h3>Data nașterii</h3></div>
                    <div className={`cell achitat`}><h3>Achitat</h3></div>
                    <i className="ri-eye-line" style={{ visibility: 'hidden' }}></i>
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
                                <div className={`cell name`}><h3>{data.name}</h3></div>
                                <div className={`cell ${(3 * cellSpace) < tableWidth ? '' : 'hide'} email`}><h3>{data.email}</h3></div>
                                <div className={`cell ${(4 * cellSpace) < tableWidth ? '' : 'hide'} phone`}><h3>{data.phone}</h3></div>
                                <div className={`cell ${(5 * cellSpace) < tableWidth ? '' : 'hide'} address`}><h3>{data.address}</h3></div>
                                <div className={`cell ${(6 * cellSpace) < tableWidth ? '' : 'hide'} is-member`}><h3>{data.isMember ? 'Da' : 'Nu'}</h3></div>
                                <div className={`cell ${(7 * cellSpace) < tableWidth ? '' : 'hide'} faculty`}><h3>{data.faculty}</h3></div>
                                <div className={`cell ${(8 * cellSpace) < tableWidth ? '' : 'hide'} study-year`}><h3>{data.studyYear}</h3></div>
                                <div className={`cell ${(9 * cellSpace) < tableWidth ? '' : 'hide'} department`}><h3>{data.department}</h3></div>
                                <div className={`cell ${(10 * cellSpace) < tableWidth ? '' : 'hide'} university`}><h3>{data.university}</h3></div>
                                <div className={`cell ${(11 * cellSpace) < tableWidth ? '' : 'hide'} date-of-birth`}><h3>{data.dateOfBirth}</h3></div>
                                <div className={`cell achitat`}><h3>{data.achitat} RON</h3></div>
                                <button onClick={() => {
                                    setModalData(data);
                                    setShowModal(true);
                                }}>
                                    <i className="ri-eye-line"></i>
                                </button>
                            </div>
                        )
                    })}

                    {date.length === 0 && <div className="row">
                        <div className="cell center">Nu există date</div>
                    </div>}
                </div>
                

                <div className="row footer">
                    <h3>Total achitat: {date.reduce((acc, curr) => acc + (curr.achitat ? curr.achitat : 0), 0)} RON ({date.reduce((acc, curr) => acc + (curr.achitat ? 1 : 0), 0)}/{date.length})</h3>
                </div>
            </div>

            {date.length !== 0 && <Modal data={modalData} show={showModal} setShow={setShowModal} />}
        </div>
    )
}

export interface Data {
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
