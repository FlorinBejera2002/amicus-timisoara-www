import { useState, useRef, useEffect } from "react";
import logo from '@/assets/Logo-AMiCUS-TM.png';
import './Table.scss';
import Modal from './modal/Modal';
import {createClient} from "@supabase/supabase-js";

export default function Table() {
    const cellSpace = 110;
    const [date, setDate] = useState<Data[]>([]);
    const [modalData, setModalData] = useState<Data>();
    const [showModal, setShowModal] = useState(true);
    const [search, setSearch] = useState('');
    const [tableWidth, setTableWidth] = useState(window.innerWidth);

    const inputRef = useRef<HTMLInputElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);

    const supabaseUrl = 'https://trzpetwunbmirbuqhxkh.supabase.co' // Înlocuiește cu valorile tale
    const supabaseKey =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyenBldHd1bmJtaXJidXFoeGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDczMjYsImV4cCI6MjA3Mjk4MzMyNn0.M_bWzJgK6_2RgHeLyZDGUfz1PEv4ZYshm8sxqb2Y-Ec'
    const supabase = createClient(supabaseUrl, supabaseKey)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .order('id', { ascending: true });

            if (error) {
                console.error('Eroare la preluarea datelor:', error);
            } else {
                // Map the data to match the Data interface
                const mappedData: Data[] = data.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    phone: item.phone,
                    address: item.address,
                    isMember: item.is_member,
                    faculty: item.faculty || '',
                    studyYear: item.study_year || '',
                    department: item.department || '',
                    university: item.university || '',
                    dateOfBirth: item.date_of_birth || '',
                    cash: item.cash || 0
                }));
                setDate(mappedData);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once on mount

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

                <div className="search-bar">
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
                    <div className={`cell ${(7 * cellSpace) < tableWidth ? '' : 'hide'} date-of-birth`}><h3>Data nașterii</h3></div>
                    <div className={`cell ${(8 * cellSpace) < tableWidth ? '' : 'hide'} department`}><h3>Departament</h3></div>
                    <div className={`cell ${(9 * cellSpace) < tableWidth ? '' : 'hide'} university`}><h3>Universitate</h3></div>
                    <div className={`cell ${(10 * cellSpace) < tableWidth ? '' : 'hide'} faculty`}><h3>Facultate</h3></div>
                    <div className={`cell ${(11 * cellSpace) < tableWidth ? '' : 'hide'} study-year`}><h3>Anul</h3></div>
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
                                <div className={`cell ${(7 * cellSpace) < tableWidth ? '' : 'hide'} date-of-birth`}><h3>{data.dateOfBirth}</h3></div>
                                <div className={`cell ${(8 * cellSpace) < tableWidth ? '' : 'hide'} department`}><h3>{data.department}</h3></div>
                                <div className={`cell ${(9 * cellSpace) < tableWidth ? '' : 'hide'} university`}><h3>{data.university}</h3></div>
                                <div className={`cell ${(10 * cellSpace) < tableWidth ? '' : 'hide'} faculty`}><h3>{data.faculty}</h3></div>
                                <div className={`cell ${(11 * cellSpace) < tableWidth ? '' : 'hide'} study-year`}><h3>{data.studyYear}</h3></div>
                                <div className={`cell achitat`}><h3>{data.cash ? data.cash + ' RON' : '0 RON'}</h3></div>
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
                    <h3>Total achitat: {date.reduce((acc, curr) => acc + (curr.cash ? curr.cash : 0), 0)} RON ({date.reduce((acc, curr) => acc + (curr.cash ? 1 : 0), 0)}/{date.length})</h3>
                </div>
            </div>

            {date.length !== 0 && <Modal data={modalData as Data} show={showModal} setShow={setShowModal} date={date} setDate={setDate}/>}
        </div>
    )
}

export interface Data {
    id: number,
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
    cash: number
}
