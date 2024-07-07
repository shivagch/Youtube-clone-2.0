const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'No API key found';

export const YOUTUBE_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;
