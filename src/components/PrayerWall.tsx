import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

const supabaseUrl = 'https://trzpetwunbmirbuqhxkh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyenBldHd1bmJtaXJidXFoeGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDczMjYsImV4cCI6MjA3Mjk4MzMyNn0.M_bWzJgK6_2RgHeLyZDGUfz1PEv4ZYshm8sxqb2Y-Ec';
const supabase = createClient(supabaseUrl, supabaseKey);

interface PrayerRequest {
  id: number;
  title: string;
  content: string;
  author_name?: string;
  is_anonymous: boolean;
  prayer_count: number;
  created_at: string;
}

export const PrayerWall = () => {
  const { t } = useTranslation();
  const [prayers, setPrayers] = useState<PrayerRequest[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [prayedFor, setPrayedFor] = useState<Set<number>>(new Set());

  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    fetchPrayers();
    // Load prayed for prayers from localStorage
    const stored = localStorage.getItem('prayedFor');
    if (stored) {
      setPrayedFor(new Set(JSON.parse(stored)));
    }
  }, []);

  const fetchPrayers = async () => {
    try {
      const { data, error } = await supabase
        .from('prayer_requests')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPrayers(data || []);
    } catch (error) {
      console.error('Error fetching prayers:', error);
    } finally {
      setLoading(false);
    }
  };

  const submitPrayer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const { error } = await supabase
        .from('prayer_requests')
        .insert({
          title: title.trim(),
          content: content.trim(),
          author_name: isAnonymous ? null : authorName.trim() || null,
          is_anonymous: isAnonymous,
          is_approved: true // Auto-approve for now, you can add moderation later
        });

      if (error) throw error;

      toast.success(t('prayerSuccess'));
      setTitle('');
      setContent('');
      setAuthorName('');
      setIsAnonymous(false);
      setShowForm(false);
      fetchPrayers();
    } catch (error) {
      console.error('Error submitting prayer:', error);
      toast.error(t('prayerError'));
    }
  };

  const prayForRequest = async (prayerId: number) => {
    if (prayedFor.has(prayerId)) return;

    try {
      // Get user IP (simplified - in production you'd want a more robust solution)
      const userIP = 'anonymous_' + Math.random().toString(36).substr(2, 9);
      
      const { error } = await supabase
        .from('prayer_interactions')
        .insert({
          prayer_request_id: prayerId,
          user_ip: userIP
        });

      if (error && !error.message.includes('duplicate')) throw error;

      // Update prayer count
      const { error: updateError } = await supabase
        .from('prayer_requests')
        .update({ 
          prayer_count: prayers.find(p => p.id === prayerId)!.prayer_count + 1 
        })
        .eq('id', prayerId);

      if (updateError) throw updateError;

      // Update local state
      const newPrayedFor = new Set(prayedFor);
      newPrayedFor.add(prayerId);
      setPrayedFor(newPrayedFor);
      localStorage.setItem('prayedFor', JSON.stringify([...newPrayedFor]));

      setPrayers(prev => prev.map(p => 
        p.id === prayerId ? { ...p, prayer_count: p.prayer_count + 1 } : p
      ));

      toast.success('🙏 ' + t('prayed'));
    } catch (error) {
      console.error('Error recording prayer:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className="ri-hands-pray-line text-6xl mb-6"></i>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Peretele Rugăciunii
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Împărtășește-ți rugăciunile cu comunitatea noastră. Studenții AMiCUS se vor ruga pentru tine.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Cum funcționează?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-red-100">
                <div className="text-center">
                  <i className="ri-edit-line text-3xl mb-2"></i>
                  <p className="font-medium">1. Scrii rugăciunea</p>
                  <p className="text-sm">Împărtășește cererea ta</p>
                </div>
                <div className="text-center">
                  <i className="ri-team-line text-3xl mb-2"></i>
                  <p className="font-medium">2. Comunitatea vede</p>
                  <p className="text-sm">Membrii AMiCUS citesc</p>
                </div>
                <div className="text-center">
                  <i className="ri-hands-pray-line text-3xl mb-2"></i>
                  <p className="font-medium">3. Ne rugăm pentru tine</p>
                  <p className="text-sm">Studenții se roagă zilnic</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <i className="ri-add-line text-xl"></i>
              <span>Adaugă o Rugăciune</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Prayer Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200"
          >
            <form onSubmit={submitPrayer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('prayerTitle')} *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('prayerContent')} *
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  required
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('authorName')}
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    disabled={isAnonymous}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    {t('anonymous')}
                  </label>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-primary-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  {t('submit')}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-chat-3-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{prayers.length}</h3>
            <p className="text-gray-600">Rugăciuni Active</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-hands-pray-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{prayers.reduce((sum, p) => sum + p.prayer_count, 0)}</h3>
            <p className="text-gray-600">Rugăciuni Oferite</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-team-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">25+</h3>
            <p className="text-gray-600">Studenți care se Roagă</p>
          </div>
        </div>

        {/* Prayer Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {prayers.map((prayer) => (
          <motion.div
            key={prayer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {prayer.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {prayer.content}
            </p>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <i className="ri-user-line mr-2"></i>
              <span>
                {prayer.is_anonymous ? 'Anonim' : prayer.author_name || 'Anonim'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 flex items-center">
                  <i className="ri-hands-pray-line mr-1"></i>
                  {prayer.prayer_count} rugăciuni
                </span>
                <span className="text-xs text-gray-400">
                  <i className="ri-calendar-line mr-1"></i>
                  {formatDate(prayer.created_at)}
                </span>
              </div>
              
              <button
                onClick={() => prayForRequest(prayer.id)}
                disabled={prayedFor.has(prayer.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  prayedFor.has(prayer.id)
                    ? 'bg-green-100 text-green-700 cursor-not-allowed transform scale-95'
                    : 'bg-primary-red text-white hover:bg-red-700 hover:scale-105'
                }`}
              >
                {prayedFor.has(prayer.id) ? (
                  <>
                    <i className="ri-check-line mr-1"></i>
                    M-am rugat
                  </>
                ) : (
                  <>
                    <i className="ri-hands-pray-line mr-1"></i>
                    Mă rog
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

        {prayers.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-hands-pray-line text-6xl text-gray-300 mb-4"></i>
            <p className="text-gray-500 text-lg">Încă nu sunt rugăciuni. Fii primul care împărtășește!</p>
          </div>
        )}

        {/* Community Promise Section */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Promisiunea Noastră</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fiecare rugăciune postată aici este citită și inclusă în rugăciunile noastre zilnice de către membrii AMiCUS Timișoara.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rugăciune Zilnică</h3>
              <p className="text-gray-600">Ne rugăm în fiecare zi pentru cererile voastre</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confidențialitate</h3>
              <p className="text-gray-600">Poți alege să rămâi anonim dacă dorești</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cu Dragoste</h3>
              <p className="text-gray-600">Fiecare rugăciune este tratată cu respect și dragoste</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              "Rugați-vă unii pentru alții, ca să fiți vindecați. Rugăciunea fierbinte a celui neprihănit are o mare putere." - Iacov 5:16
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrayerWall;
