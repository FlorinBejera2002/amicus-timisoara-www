import { useState, useEffect } from 'react';
import { Data } from '../Table';
import './Modal.scss';

export default function Modal({ data, show, setShow }: { data: Data, show: boolean, setShow: (show: boolean) => void }) {
    const [achitat, setAchitat] = useState(data.achitat);

    useEffect(() => {
        setAchitat(data.achitat);
    }, [data]);

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
                        <div className="cell tag">Anul:</div>
                        <div className="cell">{data.studyYear}</div>
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
                        <div className="cell tag">Data nașterii:</div>
                        <div className="cell">{data.dateOfBirth}</div>
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
                        <div className="cell tag">Facultate:</div>
                        <div className="cell">{data.faculty}</div>
                    </div>
                    <div className="row">
                        <div className="cell tag">Telefon:</div>
                        <div className="cell">{data.phone}</div>    
                    </div>
                    <div className="row">
                        <div className="cell tag">Achitat:</div>
                        <div className="cell">
                            <div className="price">
                                <input type="number" value={achitat} onChange={(e) => setAchitat(parseInt(e.target.value))} />
                                <button onClick={() => {
                                    data.achitat = achitat;
                                    setShow(false);
                                }}>
                                    <i className="ri-send-plane-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
