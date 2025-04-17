// src/api/youtube.js
import axios from 'axios';

const YOUTUBE_API_KEY = "YOUTUBE_API"; // store in .env in production

export async function fetchYouTubeVideoId(query) {
  const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      key: YOUTUBE_API_KEY,
      maxResults: 1,
      type: 'video',
    },
  });

  if (res.data.items.length > 0) {
    return res.data.items[0].id.videoId;
  } else {
    throw new Error('No video found for query: ' + query);
  }
}
