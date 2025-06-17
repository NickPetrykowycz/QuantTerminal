import React from 'react';
import ProfileCard from './ProfileCard';
import ClockWidget from './ClockWidget';
import WeatherWidget from './WeatherWidget';

function InfoPanel() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-black/90 px-10 py-12">
      <ProfileCard
        className=""
        imageSize="w-70 h-70"
        nameSize="text-4xl"
        locationSize="text-xl"
        creatorSize="text-xl"
      />
      <ClockWidget timeSize="text-4xl" dateSize="text-lg" />
      <WeatherWidget iconSize="w-16 h-16" tempSize="text-2xl" descSize="text-lg" />
    </div>
  );
}

export default InfoPanel;