import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4">
      <h3 className="text-xl font-bold">Recommended Songs</h3>
      <ul className="list-disc list-inside mt-2">
        {songs.map((song, index) => (
          <li key={index} className="text-lg">{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
