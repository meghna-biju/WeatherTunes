import React, { useEffect, useState } from "react";
import { fetchYouTubeVideoId } from "../api/youtube";
import YouTubePlayer from "./YouTubePlayer";

const SongList = ({ songs }) => {
  const [videoIds, setVideoIds] = useState({});

  useEffect(() => {
    let isCancelled = false;

    const fetchVideos = async () => {
      const ids = {};
      for (let song of songs) {
        try {
          const id = await fetchYouTubeVideoId(song);
          if (!isCancelled) {
            ids[song] = id;
          }
        } catch (err) {
          if (!isCancelled) {
            console.error("Error fetching video for:", song, err);
          }
        }
      }
      if (!isCancelled) {
        setVideoIds(ids);
      }
    };

    fetchVideos();

    return () => {
      isCancelled = true;
    };
  }, [songs]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4">
      <h3 className="text-xl font-bold mb-4">Recommended Songs</h3>
      <ul className="space-y-6">
        {songs.map((song, index) => (
          <li key={index}>
            <p className="text-lg font-semibold">{song}</p>
            {videoIds[song] ? (
              <YouTubePlayer videoId={videoIds[song]} />
            ) : (
              <p className="text-sm text-gray-500">Loading video...</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
