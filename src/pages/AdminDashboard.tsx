import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import Footer from '../components/Footer';

const supabaseUrl = 'https://simjdwskdosbmenaqhzd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbWpkd3NrZG9zYm1lbmFxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzgwNDQsImV4cCI6MjA3NTA1NDA0NH0.ujTLHvPIAbF1HVhgOF1Tqk-Rr4a18z7ZoEjk7IANe-E';
const supabase = createClient(supabaseUrl, supabaseKey);

interface DashboardStats {
  totalMembers: number;
  activeMembers: number;
  totalEvents: number;
  upcomingEvents: number;
  totalPrayers: number;
  pendingPrayers: number;
  totalProjects: number;
  activeProjects: number;
  totalDonations: number;
  monthlyDonations: number;
  unreadMessages: number;
  totalMessages: number;
}

interface RecentActivity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  user?: string;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 0,
    activeMembers: 0,
    totalEvents: 0,
    upcomingEvents: 0,
    totalPrayers: 0,
    pendingPrayers: 0,
    totalProjects: 0,
    activeProjects: 0,
    totalDonations: 0,
    monthlyDonations: 0,
    unreadMessages: 0,
    totalMessages: 0
  });
  
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch various statistics
      const [
        membersData,
        eventsData,
        prayersData,
        projectsData,
        messagesData
      ] = await Promise.all([
        supabase.from('users').select('id, is_active, last_activity'),
        supabase.from('events').select('id, is_active, event_date'),
        supabase.from('prayer_requests').select('id, is_approved, created_at'),
        supabase.from('projects').select('id, status'),
        supabase.from('contact_messages').select('id, is_read, created_at')
      ]);

      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      setStats({
        totalMembers: membersData.data?.length || 0,
        activeMembers: membersData.data?.filter(m => 
          m.is_active && new Date(m.last_activity) > weekAgo
        ).length || 0,
        totalEvents: eventsData.data?.length || 0,
        upcomingEvents: eventsData.data?.filter(e => 
          e.is_active && new Date(e.event_date) > now
        ).length || 0,
        totalPrayers: prayersData.data?.length || 0,
        pendingPrayers: prayersData.data?.filter(p => !p.is_approved).length || 0,
        totalProjects: projectsData.data?.length || 0,
        activeProjects: projectsData.data?.filter(p => p.status === 'active').length || 0,
        totalDonations: 0, // Would need donations table
        monthlyDonations: 0, // Would need donations table
        unreadMessages: messagesData.data?.filter(m => !m.is_read).length || 0,
        totalMessages: messagesData.data?.length || 0
      });

      // Generate recent activity (simplified)
      const activities: RecentActivity[] = [
        {
          id: '1',
          type: 'prayer',
          description: 'Nouă cerere de rugăciune adăugată',
          timestamp: new Date().toISOString(),
          user: 'Maria Popescu'
        },
        {
          id: '2',
          type: 'event',
          description: 'Înregistrare nouă la conferința anuală',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          user: 'Alexandru Ionescu'
        },
        {
          id: '3',
          type: 'member',
          description: 'Membru nou înregistrat',
          timestamp: new Date(Date.now() - 7200000).toISOString(),
          user: 'Elena Dumitrescu'
        }
      ];
      
      setRecentActivity(activities);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Eroare la încărcarea datelor');
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, subtitle, icon, color, trend }: {
    title: string;
    value: number | string;
    subtitle?: string;
    icon: string;
    color: string;
    trend?: { value: number; isPositive: boolean };
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 border-l-4"
      style={{ borderLeftColor: color }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          {trend && (
            <div className={`flex items-center mt-2 text-sm ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <i className={`ri-arrow-${trend.isPositive ? 'up' : 'down'}-line mr-1`}></i>
              {Math.abs(trend.value)}% față de luna trecută
            </div>
          )}
        </div>
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
          style={{ backgroundColor: color }}
        >
          <i className={icon}></i>
        </div>
      </div>
    </motion.div>
  );

  const QuickAction = ({ title, description, icon, color, onClick }: {
    title: string;
    description: string;
    icon: string;
    color: string;
    onClick: () => void;
  }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-shadow duration-200 w-full"
    >
      <div className="flex items-center mb-4">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-4"
          style={{ backgroundColor: color }}
        >
          <i className={icon}></i>
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.button>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
                <p className="text-gray-600 mt-1">Panou de control AMiCUS Timișoara</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Ultima actualizare</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date().toLocaleString('ro-RO')}
                  </p>
                </div>
                <button
                  onClick={fetchDashboardData}
                  className="bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <i className="ri-refresh-line"></i>
                  <span>Actualizează</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Prezentare Generală', icon: 'ri-dashboard-line' },
              { id: 'members', label: 'Membri', icon: 'ri-team-line' },
              { id: 'events', label: 'Evenimente', icon: 'ri-calendar-line' },
              { id: 'prayers', label: 'Rugăciuni', icon: 'ri-hands-pray-line' },
              { id: 'projects', label: 'Proiecte', icon: 'ri-folder-line' },
              { id: 'messages', label: 'Mesaje', icon: 'ri-mail-line' },
              { id: 'settings', label: 'Setări', icon: 'ri-settings-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-red text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Membri"
                value={stats.totalMembers}
                subtitle={`${stats.activeMembers} activi săptămâna aceasta`}
                icon="ri-team-line"
                color="#dc2626"
                trend={{ value: 12, isPositive: true }}
              />
              <StatCard
                title="Evenimente"
                value={stats.upcomingEvents}
                subtitle={`din ${stats.totalEvents} total`}
                icon="ri-calendar-line"
                color="#059669"
                trend={{ value: 8, isPositive: true }}
              />
              <StatCard
                title="Rugăciuni"
                value={stats.pendingPrayers}
                subtitle={`în așteptare din ${stats.totalPrayers}`}
                icon="ri-hands-pray-line"
                color="#7c3aed"
              />
              <StatCard
                title="Proiecte Active"
                value={stats.activeProjects}
                subtitle={`din ${stats.totalProjects} total`}
                icon="ri-folder-line"
                color="#ea580c"
              />
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acțiuni Rapide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <QuickAction
                  title="Adaugă Eveniment"
                  description="Creează un eveniment nou"
                  icon="ri-add-line"
                  color="#dc2626"
                  onClick={() => toast.info('Funcție în dezvoltare')}
                />
                <QuickAction
                  title="Aprobă Rugăciuni"
                  description={`${stats.pendingPrayers} în așteptare`}
                  icon="ri-check-line"
                  color="#059669"
                  onClick={() => toast.info('Funcție în dezvoltare')}
                />
                <QuickAction
                  title="Mesaje Noi"
                  description={`${stats.unreadMessages} necitite`}
                  icon="ri-mail-line"
                  color="#7c3aed"
                  onClick={() => toast.info('Funcție în dezvoltare')}
                />
                <QuickAction
                  title="Raport Lunar"
                  description="Generează raportul lunii"
                  icon="ri-file-chart-line"
                  color="#ea580c"
                  onClick={() => toast.info('Funcție în dezvoltare')}
                />
              </div>
            </div>

            {/* Recent Activity & Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Activitate Recentă</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                        activity.type === 'prayer' ? 'bg-purple-500' :
                        activity.type === 'event' ? 'bg-green-500' :
                        activity.type === 'member' ? 'bg-blue-500' : 'bg-gray-500'
                      }`}>
                        <i className={
                          activity.type === 'prayer' ? 'ri-hands-pray-line' :
                          activity.type === 'event' ? 'ri-calendar-line' :
                          activity.type === 'member' ? 'ri-user-line' : 'ri-notification-line'
                        }></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{activity.description}</p>
                        {activity.user && (
                          <p className="text-gray-500 text-sm">de {activity.user}</p>
                        )}
                        <p className="text-gray-400 text-xs">
                          {new Date(activity.timestamp).toLocaleString('ro-RO')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Status Sistem</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Baza de date</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">Operațional</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Server API</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">Operațional</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email Service</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-600 font-medium">Întreținere</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Backup</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">Actualizat</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Utilizare Resurse</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">CPU</span>
                        <span className="text-gray-900">23%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Memorie</span>
                        <span className="text-gray-900">67%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Stocare</span>
                        <span className="text-gray-900">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab !== 'overview' && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <i className="ri-tools-line text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Secțiunea {
              activeTab === 'members' ? 'Membri' :
              activeTab === 'events' ? 'Evenimente' :
              activeTab === 'prayers' ? 'Rugăciuni' :
              activeTab === 'projects' ? 'Proiecte' :
              activeTab === 'messages' ? 'Mesaje' :
              activeTab === 'settings' ? 'Setări' : ''
            }</h3>
            <p className="text-gray-600 mb-6">
              Această secțiune este în dezvoltare și va fi disponibilă în curând.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Funcții Planificate</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gestionare membri</li>
                  <li>• Export date</li>
                  <li>• Statistici detaliate</li>
                  <li>• Notificări automate</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Integrări</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Email marketing</li>
                  <li>• Plăți online</li>
                  <li>• Calendar sincronizat</li>
                  <li>• Rapoarte PDF</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Securitate</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Autentificare 2FA</li>
                  <li>• Roluri utilizatori</li>
                  <li>• Audit log</li>
                  <li>• Backup automat</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export { AdminDashboard };
