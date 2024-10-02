import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Data } from '../Table';
import './Modal.scss';

export default function Modal({ data, show, setShow, date, setDate }: { data: Data | undefined, show: boolean, setShow: (show: boolean) => void, date: Data[], setDate: (date: Data[]) => void }) {
    if (!data) return null;
    const [achitat, setAchitat] = useState(data.cash);

    useEffect(() => {
        setAchitat(data.cash);
    }, [data]);

    const supabaseUrl = 'https://trzpetwunbmirbuqhxkh.supabase.co' // Înlocuiește cu valorile tale
    const supabaseKey =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyenBldHd1bmJtaXJidXFoeGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDczMjYsImV4cCI6MjA3Mjk4MzMyNn0.M_bWzJgK6_2RgHeLyZDGUfz1PEv4ZYshm8sxqb2Y-Ec'
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
        <div className={`modal-wrapper ${show ? '' : 'hide' }`}>
            <div className="modal">
                <div className="title">
                    <h1>{data.name}</h1>
                    <button onClick={() => setShow(!show) }>
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="modal-content">
                    <div className="row">
                        <div className="cell tag">Email:</div>
                        <div className="cell">{data.email}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Telefon:</div>
                        <div className="cell">{data.phone}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Adresă:</div>
                        <div className="cell">{data.address}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Membru:</div>
                        <div className="cell">{data.isMember ? 'Da' : 'Nu'}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Data nașterii:</div>
                        <div className="cell">{data.dateOfBirth}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Depart.:</div>
                        <div className="cell">{data.department}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Universitate:</div>
                        <div className="cell">{data.university}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Facultate:</div>
                        <div className="cell">{data.faculty}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Anul:</div>
                        <div className="cell">{data.studyYear}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Achitat:</div>
                        <div className="cell">
                            <form className="price" onSubmit={handleUpdateCash}>
                                <input type="number" value={achitat} onChange={(e) => setAchitat(parseInt(e.target.value))} />
                                <button type="submit">
                                    <i className="ri-send-plane-fill"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
