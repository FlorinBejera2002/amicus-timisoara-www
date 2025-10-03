import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { createClient } from '@supabase/supabase-js';
import { Data } from '../table/Table';
import Modal from '../table/modal/Modal';
import logo from '@/assets/Logo-AMiCUS-TM.png';

const supabaseUrl = 'https://simjdwskdosbmenaqhzd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbWpkd3NrZG9zYm1lbmFxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzgwNDQsImV4cCI6MjA3NTA1NDA0NH0.ujTLHvPIAbF1HVhgOF1Tqk-Rr4a18z7ZoEjk7IANe-E';
const supabase = createClient(supabaseUrl, supabaseKey);

export const DashboardPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Data[]>([]);
  const [modalData, setModalData] = useState<Data>();
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPaid: 0,
    paidUsers: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateStats();
  }, [data]);

  const fetchData = async () => {
    try {
      const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching data:', error);
        return;
      }

      const mappedData: Data[] = users.map((item: any) => ({
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

      setData(mappedData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    const totalUsers = data.length;
    const totalPaid = data.reduce((acc, user) => acc + (user.cash || 0), 0);
    const paidUsers = data.filter(user => user.cash > 0).length;

    setStats({ totalUsers, totalPaid, paidUsers });
  };

  const filteredData = data.filter(user => 
    search === '' || user.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = async (userId: number) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (error) throw error;

      setData(prev => prev.filter(user => user.id !== userId));
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={logo} alt="AMiCUS Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  AMiCUS Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage members and registrations
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <i className="ri-user-line text-2xl text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Paid</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPaid} RON</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-primary-red/10 rounded-full">
                <i className="ri-check-line text-2xl text-primary-red"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Paid Members</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.paidUsers}/{stats.totalUsers}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
              <div className="col-span-3">Name</div>
              <div className="col-span-3 hidden md:block">Email</div>
              <div className="col-span-2 hidden lg:block">Phone</div>
              <div className="col-span-2 hidden xl:block">Department</div>
              <div className="col-span-1">Paid</div>
              <div className="col-span-1">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="max-h-96 overflow-y-auto">
            {filteredData.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3">
                    <p className="font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-sm text-gray-500 md:hidden truncate">{user.email}</p>
                  </div>
                  <div className="col-span-3 hidden md:block">
                    <p className="text-gray-900 truncate">{user.email}</p>
                  </div>
                  <div className="col-span-2 hidden lg:block">
                    <p className="text-gray-900">{user.phone}</p>
                  </div>
                  <div className="col-span-2 hidden xl:block">
                    <p className="text-gray-900 truncate">{user.department}</p>
                  </div>
                  <div className="col-span-1">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.cash > 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.cash > 0 ? `${user.cash} RON` : '0 RON'}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <button
                      onClick={() => {
                        setModalData(user);
                        setShowModal(true);
                      }}
                      className="text-primary-red hover:text-red-700 transition-colors duration-200"
                    >
                      <i className="ri-eye-line text-lg"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="px-6 py-12 text-center">
              <i className="ri-user-line text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">No members found</p>
            </div>
          )}

          {/* Table Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-700">
              Total: {stats.totalPaid} RON ({stats.paidUsers}/{stats.totalUsers} members paid)
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalData && (
        <Modal 
          data={modalData} 
          show={showModal} 
          setShow={setShowModal}
          date={data}
          setDate={setData}
          onDelete={deleteUser}
        />
      )}
    </div>
  );
};

export default DashboardPage;
