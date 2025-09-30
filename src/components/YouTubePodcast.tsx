import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone, FaYoutube, FaPlay, FaClock } from 'react-icons/fa';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
}

interface YouTubePodcastProps {
  channelId?: string;
  apiKey?: string;
}

const YouTubePodcast: React.FC<YouTubePodcastProps> = ({ 
  channelId = 'UCYourChannelIdHere', 
  apiKey 
}) => {
  const [latestVideo, setLatestVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data pentru demonstrație - înlocuiește cu API call real
  const mockVideo: YouTubeVideo = {
    id: 'dQw4w9WgXcQ',
    title: 'Credința în Viața Universitară - Episodul 15',
    description: 'O conversație inspirațională despre cum să îți menții credința în timpul studiilor universitare...',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    publishedAt: '2024-01-15T10:00:00Z',
    duration: 'PT45M32S',
    viewCount: '1234'
  };

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        setLoading(true);
        
        if (!apiKey) {
          // Folosește mock data dacă nu există API key
          setTimeout(() => {
            setLatestVideo(mockVideo);
            setLoading(false);
          }, 1000);
          return;
        }

        // API call real către YouTube
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch YouTube data');
        }

        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          
          // Fetch additional details
          const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${video.id.videoId}&part=contentDetails,statistics`
          );
          
          const detailsData = await detailsResponse.json();
          const videoDetails = detailsData.items[0];
          
          setLatestVideo({
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high.url,
            publishedAt: video.snippet.publishedAt,
            duration: videoDetails.contentDetails.duration,
            viewCount: videoDetails.statistics.viewCount
          });
        }
      } catch (err) {
        setError('Nu s-au putut încărca datele podcast-ului');
        // Fallback la mock data
        setLatestVideo(mockVideo);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideo();
  }, [channelId, apiKey]);

  const formatDuration = (duration: string) => {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '00:00';
    
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');
    
    if (hours) {
      return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
    return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openYouTubeVideo = () => {
    if (latestVideo) {
      window.open(`https://www.youtube.com/watch?v=${latestVideo.id}`, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-8 text-white animate-pulse">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gray-600 rounded-full mr-4"></div>
          <div>
            <div className="h-6 bg-gray-600 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-48"></div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
          <div className="h-2 bg-gray-600 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (error && !latestVideo) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-8 text-white">
        <div className="text-center">
          <FaYoutube className="text-6xl text-red-500 mx-auto mb-4" />
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-8 text-white cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={openYouTubeVideo}
    >
      {latestVideo && (
        <>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors">
              <FaPlay className="text-2xl ml-1" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Ultimul Episod</h3>
              <p className="text-gray-300 line-clamp-2">{latestVideo.title}</p>
            </div>
            <FaYoutube className="text-3xl text-red-500" />
          </div>
          
          <div className="mb-4">
            <img 
              src={latestVideo.thumbnail} 
              alt={latestVideo.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <FaClock />
                  <span>{formatDuration(latestVideo.duration)}</span>
                </span>
                <span>{formatDate(latestVideo.publishedAt)}</span>
              </div>
              <span className="text-sm text-gray-400">{parseInt(latestVideo.viewCount).toLocaleString()} vizualizări</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPlay className="text-primary-red" />
              <span className="text-sm">Click pentru a viziona pe YouTube</span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default YouTubePodcast;
