import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Data } from '../Table';

export function Modal({ data, show, setShow, date, setDate, onDelete }: { data: Data | undefined, show: boolean, setShow: (show: boolean) => void, date: Data[], setDate: (date: Data[]) => void, onDelete?: (id: number) => void }) {
    const [achitat, setAchitat] = useState(data?.cash || 0);

    useEffect(() => {
        if (data) {
            setAchitat(data.cash);
        }
    }, [data]);

    if (!data) return null;

    const supabaseUrl = 'https://simjdwskdosbmenaqhzd.supabase.co' // Înlocuiește cu valorile tale
    const supabaseKey =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbWpkd3NrZG9zYm1lbmFxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzgwNDQsImV4cCI6MjA3NTA1NDA0NH0.ujTLHvPIAbF1HVhgOF1Tqk-Rr4a18z7ZoEjk7IANe-E'
    const supabase = createClient(supabaseUrl, supabaseKey)

    const handleUpdateCash = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase
            .from('users')
            .update({ cash: achitat })
            .eq('id', data.id);
        if (error) {
            console.error('Update error:', error);
        } else {
            setShow(false);

            const updatedData = date.map(item => item.id === data.id ? { ...item, cash: achitat } : item);
            setDate(updatedData);
        }
    };



    return (
        <div className={`absolute w-screen bottom-5 left-0 transition-all duration-300 ease-in-out flex justify-end ${show ? '' : 'transform translate-y-full' }`}>
            <div className="w-full max-w-sm mx-5 border-2 border-gray-300 rounded-xl bg-gray-100 overflow-hidden shadow-lg">
                <div className="text-xl flex justify-between items-center px-4 bg-gray-200 border-b-2 border-gray-300 text-gray-600">
                    <h1>{data.name}</h1>
                    <button className="bg-transparent border-none text-gray-600 text-3xl cursor-pointer relative transition-all duration-200 hover:text-gray-800" onClick={() => setShow(!show) }>
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Email:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.email}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Telefon:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.phone}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Adresă:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.address}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Membru:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.isMember ? 'Da' : 'Nu'}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Data nașterii:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.dateOfBirth}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Depart.:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.department}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Universitate:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.university}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Facultate:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.faculty}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Anul:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">{data.studyYear}</div>
                    </div>
                    <div className="flex items-start even:bg-gray-200">
                        <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Achitat:</div>
                        <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">
                            <form className="relative flex flex-row items-center gap-0 max-w-full bg-gray-100 border border-gray-300 -m-1 -mr-5 -ml-2 p-1 rounded-xl" onSubmit={handleUpdateCash}>
                                <input className="w-full text-base text-gray-700 transition-all duration-200 bg-transparent ml-1 focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" value={achitat} onChange={(e) => setAchitat(parseInt(e.target.value))} />
                                <button className="absolute right-2 cursor-pointer" type="submit">
                                    <i className="ri-send-plane-fill text-xl text-gray-400 transition-all duration-200 hover:text-gray-600"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Delete Button */}
                    {onDelete && (
                        <div className="flex items-start even:bg-gray-200">
                            <div className="relative flex-1 flex items-center gap-0 py-2.5 px-5 font-semibold pr-0">Actions:</div>
                            <div className="relative flex-[1.7] flex items-center gap-0 py-2.5 px-5 font-normal">
                                <button
                                    onClick={() => onDelete(data.id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <i className="ri-delete-bin-line"></i>
                                    <span>Delete User</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
