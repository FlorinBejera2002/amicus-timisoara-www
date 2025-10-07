import { useState, useRef, useEffect } from "react";
import logo from '@/assets/Logo-AMiCUS-TM.png';
import { Modal } from './modal/Modal';
import {createClient} from "@supabase/supabase-js";

export function Table() {
    const cellSpace = 110;
    const [date, setDate] = useState<Data[]>([]);
    const [modalData, setModalData] = useState<Data>();
    const [showModal, setShowModal] = useState(true);
    const [search, setSearch] = useState('');
    const [tableWidth, setTableWidth] = useState(window.innerWidth);

    const inputRef = useRef<HTMLInputElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);

    const supabaseUrl = 'https://simjdwskdosbmenaqhzd.supabase.co' // Înlocuiește cu valorile tale
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbWpkd3NrZG9zYm1lbmFxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzgwNDQsImV4cCI6MjA3NTA1NDA0NH0.ujTLHvPIAbF1HVhgOF1Tqk-Rr4a18z7ZoEjk7IANe-E';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                                const mappedData = data.map((item: any) => ({
                    id: item.id,
                    name: item.full_name || item.name || '',
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
    }, []); 

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
        <div className="relative h-screen m-0 font-poppins bg-gray-200 flex flex-col justify-center gap-5 p-5 overflow-hidden">
            <div className="flex justify-between items-center gap-5">
                <img src={logo} alt="" className="h-10 mr-auto" />

                <div className="relative w-full max-w-xs flex items-center justify-center">
                    <i className="ri-search-line text-xl absolute h-5 right-4 text-gray-400 -translate-y-1/4"></i>
                    <input type="text" placeholder='Apasă tasta "F"' className="w-full h-10 px-5 rounded-full bg-gray-100 border-2 border-gray-300 text-base text-gray-700 transition-all duration-200 focus:outline-none focus:border-gray-400" ref={inputRef} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div className="w-full h-full max-w-screen-2xl bg-gray-100 rounded-xl border-2 border-gray-300 overflow-hidden flex flex-col" ref={tableRef}>
                <div className="flex justify-between items-center gap-5 px-5 py-2.5 bg-gray-200 border-b-2 border-gray-300">
                    <div className="flex-1 flex items-center gap-5 overflow-hidden text-ellipsis"><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Nume</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(3 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Email</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(4 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Telefon</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(5 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Adresă</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(6 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Membru</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(7 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Data nașterii</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(8 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Departament</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(9 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Universitate</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(10 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Facultate</h3></div>
                    <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(11 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Anul</h3></div>
                    <div className="flex-1 flex items-center gap-5 overflow-hidden text-ellipsis justify-end"><h3 className="text-base text-gray-700 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Achitat</h3></div>
                    <i className="ri-eye-line invisible"></i>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {date.filter((data) => {
                        if (search === '') {
                            return data;
                        } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
                            return data;
                        }
                    }).map((data, index) => {
                        return (
                            <div className="flex justify-between items-center gap-5 px-5 py-2.5 even:bg-gray-200" key={index}>
                                <div className="flex-1 flex items-center gap-5 overflow-hidden text-ellipsis"><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.name}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(3 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.email}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(4 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.phone}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(5 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.address}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(6 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.isMember ? 'Da' : 'Nu'}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(7 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.dateOfBirth}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(8 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.department}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(9 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.university}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(10 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.faculty}</h3></div>
                                <div className={`flex-1 flex items-center gap-5 overflow-hidden text-ellipsis ${(11 * cellSpace) < tableWidth ? '' : 'hidden'}`}><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.studyYear}</h3></div>
                                <div className="flex-1 flex items-center gap-5 overflow-hidden text-ellipsis justify-end"><h3 className="text-base text-gray-700 font-normal overflow-hidden text-ellipsis whitespace-nowrap">{data.cash ? data.cash + ' RON' : '0 RON'}</h3></div>
                                <button className="bg-transparent border-none text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200" onClick={() => {
                                    setModalData(data);
                                    setShowModal(true);
                                }}>
                                    <i className="ri-eye-line"></i>
                                </button>
                            </div>
                        )
                    })}

                    {date.length === 0 && <div className="flex justify-between items-center gap-5 px-5 py-2.5">
                        <div className="flex-1 flex items-center gap-5 overflow-hidden text-ellipsis justify-center">Nu există date</div>
                    </div>}
                </div>


                <div className="flex justify-between items-center gap-5 px-5 py-2.5 bg-gray-200 border-t-2 border-gray-300">
                    <h3 className="text-base text-gray-700 font-semibold">Total achitat: {date.reduce((acc, curr) => acc + (curr.cash ? curr.cash : 0), 0)} RON ({date.reduce((acc, curr) => acc + (curr.cash ? 1 : 0), 0)}/{date.length})</h3>
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
