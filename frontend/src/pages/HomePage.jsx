import React from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import ProfileCard from '../components/ProfileCard';
import WeatherWidget from '../components/WeatherWidget';
import ClockWidget from '../components/ClockWidget';
import SocialLinks from '../components/SocialLinks';
import ResumeButton from '../components/ResumeButton';
import FlexibleIconButton from '../components/FlexibleIconButton';
import { IoFolderOpenOutline } from "react-icons/io5";
import { PiToolbox, PiVault, PiJoystick } from "react-icons/pi";

const navApps = [
  { icon: <PiToolbox />, label: "The Toolbox", to: "/quant-tools" },
  { icon: <IoFolderOpenOutline />, label: "The Archive", to: "/quant-notes" },
  { icon: <PiVault />, label: "The Vault", to: "/quant-projects" },
  { icon: <PiJoystick />, label: "The Arcade", to: "/quant-games" },
];

function HomePage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic>
        <div className="flex flex-row-reverse w-full h-full">
          {/* Right-side Info Panel */}
          <div className="w-1/3 flex flex-col items-center justify-center gap-5">
            <ProfileCard />
            <WeatherWidget />
            <ClockWidget />
            <SocialLinks />
            <ResumeButton />
          </div>
          {/* Left-side Navigation (example) */}
          <div className="w-2/3 flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {navApps.map((app, index) => (
                <FlexibleIconButton
                  key={index}
                  icon={app.icon}
                  label={app.label}
                  to={app.to}
                />
              ))}
            </div>
          </div>
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default HomePage;
