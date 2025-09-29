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
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('prayerWallTitle')}</h1>
        <p className="text-lg text-gray-600 mb-6">{t('prayerWallDescription')}</p>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
        >
          <i className="ri-add-line"></i>
          <span>{t('addPrayer')}</span>
        </button>
      </div>

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
            
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>
                {prayer.is_anonymous ? t('anonymous') : prayer.author_name || t('anonymous')}
              </span>
              <span>{formatDate(prayer.created_at)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {prayer.prayer_count} {t('peoplesPrayers')}
              </span>
              
              <button
                onClick={() => prayForRequest(prayer.id)}
                disabled={prayedFor.has(prayer.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  prayedFor.has(prayer.id)
                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                    : 'bg-primary-red text-white hover:bg-red-700'
                }`}
              >
                {prayedFor.has(prayer.id) ? (
                  <>
                    <i className="ri-check-line mr-1"></i>
                    {t('prayed')}
                  </>
                ) : (
                  <>
                    <i className="ri-hands-pray-line mr-1"></i>
                    {t('prayForThis')}
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
          <p className="text-gray-500 text-lg">No prayers yet. Be the first to share!</p>
        </div>
      )}
    </div>
  );
};

export default PrayerWall;
