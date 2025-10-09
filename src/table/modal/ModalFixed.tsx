import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Data } from '../Table';
import { toast } from 'sonner';

const supabaseUrl = 'https://simjdwskdosbmenaqhzd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbWpkd3NrZG9zYm1lbmFxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzgwNDQsImV4cCI6MjA3NTA1NDA0NH0.ujTLHvPIAbF1HVhgOF1Tqk-Rr4a18z7ZoEjk7IANe-E';
const supabase = createClient(supabaseUrl, supabaseKey);

export function Modal({ data, show, setShow, date, setDate, onDelete }: { 
    data: Data | undefined, 
    show: boolean, 
    setShow: (show: boolean) => void, 
    date: Data[], 
    setDate: (date: Data[]) => void, 
    onDelete?: (id: string) => void 
}) {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        department: '',
        university: '',
        faculty: '',
        studyYear: '',
        isMember: false,
        taxa: 0
    });

    useEffect(() => {
        if (data) {
            setFormData({
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                address: data.address || '',
                department: data.department || '',
                university: data.university || '',
                faculty: data.faculty || '',
                studyYear: data.studyYear || '',
                isMember: data.isMember || false,
                taxa: data.taxa || 0
            });
            setEditMode(false);
        }
    }, [data]);

    if (!data) return null;

    const handleSave = async () => {
        try {
            const { error } = await supabase
                .from('users')
                .update({
                    full_name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    department: formData.department,
                    university: formData.university,
                    faculty: formData.faculty,
                    study_year: formData.studyYear ? parseInt(formData.studyYear) : null,
                    is_member: formData.isMember,
                    taxa: formData.taxa
                })
                .eq('id', data.id);

            if (error) {
                console.error('Update error:', error);
                toast.error('Eroare la salvarea datelor');
            } else {
                const updatedData = date.map(item => 
                    item.id === data.id 
                        ? { 
                            ...item, 
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                            address: formData.address,
                            department: formData.department,
                            university: formData.university,
                            faculty: formData.faculty,
                            studyYear: formData.studyYear,
                            isMember: formData.isMember,
                            taxa: formData.taxa
                        } 
                        : item
                );
                setDate(updatedData);
                setEditMode(false);
                toast.success('Datele au fost salvate cu succes!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Eroare la salvarea datelor');
        }
    };

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShow(false)}></div>
            <div className="relative w-full max-w-4xl mx-4 bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 bg-primary-red text-white">
                    <h2 className="text-xl font-bold">{editMode ? 'Editează Membru' : 'Detalii Membru'}</h2>
                    <div className="flex items-center space-x-2">
                        {!editMode && (
                            <button 
                                onClick={() => setEditMode(true)}
                                className="p-2 hover:bg-red-600 rounded-lg transition-colors"
                                title="Editează"
                            >
                                <i className="ri-edit-line text-lg"></i>
                            </button>
                        )}
                        <button 
                            onClick={() => setShow(false)}
                            className="p-2 hover:bg-red-600 rounded-lg transition-colors"
                            title="Închide"
                        >
                            <i className="ri-close-line text-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[calc(90vh-180px)] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Informații Personale */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Informații Personale</h3>
                            
                            {/* Nume */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nume Complet</label>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                {editMode ? (
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.email}</p>
                                )}
                            </div>

                            {/* Telefon */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                                {editMode ? (
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.phone}</p>
                                )}
                            </div>

                            {/* Adresă */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Adresă</label>
                                {editMode ? (
                                    <textarea
                                        value={formData.address}
                                        onChange={(e) => handleInputChange('address', e.target.value)}
                                        rows={2}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.address}</p>
                                )}
                            </div>
                        </div>

                        {/* Informații Academice */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Informații Academice</h3>
                            
                            {/* Departament */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Departament</label>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={formData.department}
                                        onChange={(e) => handleInputChange('department', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.department}</p>
                                )}
                            </div>

                            {/* Universitate */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Universitate</label>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={formData.university}
                                        onChange={(e) => handleInputChange('university', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.university}</p>
                                )}
                            </div>

                            {/* Facultate */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Facultate</label>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={formData.faculty}
                                        onChange={(e) => handleInputChange('faculty', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.faculty}</p>
                                )}
                            </div>

                            {/* An de studiu */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">An de studiu</label>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={formData.studyYear}
                                        onChange={(e) => handleInputChange('studyYear', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                    />
                                ) : (
                                    <p className="px-3 py-2 bg-gray-50 rounded-lg">{data.studyYear}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Status și Plăți */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Status și Plăți</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Status Membru */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status Membru</label>
                                {editMode ? (
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                checked={formData.isMember}
                                                onChange={() => handleInputChange('isMember', true)}
                                                className="mr-2"
                                            />
                                            Membru
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                checked={!formData.isMember}
                                                onChange={() => handleInputChange('isMember', false)}
                                                className="mr-2"
                                            />
                                            Nu este membru
                                        </label>
                                    </div>
                                ) : (
                                    <p className={`px-3 py-2 rounded-lg ${data.isMember ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {data.isMember ? 'Membru' : 'Nu este membru'}
                                    </p>
                                )}
                            </div>

                            {/* Taxa */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Taxa de Înscriere (RON)</label>
                                {editMode ? (
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="number"
                                            value={formData.taxa}
                                            onChange={(e) => handleInputChange('taxa', parseInt(e.target.value) || 0)}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                                            min="0"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleInputChange('taxa', formData.taxa > 0 ? 0 : 50)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                                formData.taxa > 0 
                                                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                                                    : 'bg-red-100 text-red-800 hover:bg-red-200'
                                            }`}
                                        >
                                            {formData.taxa > 0 ? 'Plătit' : 'Neplătit'}
                                        </button>
                                    </div>
                                ) : (
                                    <p className={`px-3 py-2 rounded-lg font-medium ${
                                        data.taxa > 0 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {data.taxa > 0 ? `${data.taxa} RON - Plătit` : '0 RON - Neplătit'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t flex justify-between items-center">
                    <div className="flex space-x-2">
                        {onDelete && (
                            <button
                                onClick={() => {
                                    if (confirm('Ești sigur că vrei să ștergi acest membru?')) {
                                        onDelete(data.id);
                                        setShow(false);
                                    }
                                }}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                            >
                                <i className="ri-delete-bin-line"></i>
                                <span>Șterge</span>
                            </button>
                        )}
                    </div>
                    
                    <div className="flex space-x-2">
                        {editMode ? (
                            <>
                                <button
                                    onClick={() => setEditMode(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Anulează
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                                >
                                    <i className="ri-save-line"></i>
                                    <span>Salvează</span>
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => setShow(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                            >
                                Închide
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
