const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'No API key found';

export const MESSAGES_COUNT = 30;

export const YOUTUBE_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API ="https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=${API_KEY}&q=`;