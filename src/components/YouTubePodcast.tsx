import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay, FaClock } from 'react-icons/fa';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
  videoId: string;
}

interface YouTubePodcastProps {
  apiKey?: string;
  maxResults?: number;
  channelId?: string;
}

export const YouTubePodcast: React.FC<YouTubePodcastProps> = ({
  channelId = 'UCq9CRbq63JyifTl143ct1fw',
  apiKey,
  maxResults = 3
}) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  // No mock data - only real YouTube data will be shown

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        
        if (!apiKey) {
          setError('YouTube API key is required to load videos');
          setLoading(false);
          return;
        }

        // First, fetch the uploads playlist ID from the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=contentDetails`
        );
        
        if (!channelResponse.ok) {
          throw new Error('Nu s-a putut obține canalul YouTube');
        }

        const channelData = await channelResponse.json();
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Then fetch the videos from the uploads playlist
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=${maxResults}`
        );
        
        if (!playlistResponse.ok) {
          throw new Error('Nu s-au putut încărca videoclipurile');
        }

        const playlistData = await playlistResponse.json();
        
        if (playlistData.items && playlistData.items.length > 0) {
          // Get video IDs for batch request
          const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
          
          // Fetch video details in a batch request
          const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=contentDetails,statistics,snippet`
          );
          
          const detailsData = await detailsResponse.json();
          
          const videosData = detailsData.items.map((video: any) => ({
            id: video.id,
            videoId: video.id,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high.url,
            publishedAt: video.snippet.publishedAt,
            duration: video.contentDetails.duration,
            viewCount: video.statistics.viewCount
          }));
          
          setVideos(videosData);
          setSelectedVideo(videosData[0]);
        }
      } catch (err) {
        console.error('Error fetching YouTube data:', err);
        setError('Nu s-au putut încărca videoclipurile. Vă rugăm încercați din nou mai târziu.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [channelId, apiKey, maxResults]);

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

  const openYouTubeVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const selectVideo = (video: YouTubeVideo) => {
    setSelectedVideo(video);
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4">
              <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-2 bg-gray-600 rounded w-1/2 mb-4"></div>
              <div className="aspect-video bg-gray-600 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || videos.length === 0) {
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
      className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-8 text-white"
    >
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mr-4">
          <FaPlay className="text-2xl ml-1" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Podcast-uri AMiCUS</h2>
          <p className="text-gray-300">Urmărește ultimele episoade</p>
        </div>
        <FaYoutube className="text-4xl text-red-500" />
      </div>

      {selectedVideo && (
        <div className="mb-8">
          <div 
            className="relative group cursor-pointer mb-4"
            onClick={() => openYouTubeVideo(selectedVideo.videoId)}
          >
            <img 
              src={selectedVideo.thumbnail} 
              alt={selectedVideo.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 rounded-full p-4">
                <FaPlay className="text-4xl text-white" />
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center space-x-1">
              <FaClock />
              <span>{formatDuration(selectedVideo.duration)}</span>
            </span>
            <span>{formatDate(selectedVideo.publishedAt)}</span>
            <span>{parseInt(selectedVideo.viewCount).toLocaleString()} vizualizări</span>
          </div>
          <p className="text-gray-300 line-clamp-3">{selectedVideo.description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div 
            key={video.id}
            className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all ${selectedVideo?.id === video.id ? 'ring-2 ring-primary-red' : 'hover:ring-1 hover:ring-gray-600'}`}
            onClick={() => selectVideo(video)}
          >
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                {formatDuration(video.duration)}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium line-clamp-2 text-sm">{video.title}</h4>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                <span>{formatDate(video.publishedAt)}</span>
                <span>{parseInt(video.viewCount).toLocaleString()} viz.</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

