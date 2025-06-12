import React from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import ProfileCard from '../components/ProfileCard';
import WeatherWidget from '../components/WeatherWidget';
import ClockWidget from '../components/ClockWidget';
import FlexibleIconButton from '../components/FlexibleIconButton';
import { IoFolderOpenOutline } from "react-icons/io5";
import { PiToolbox, PiVault, PiJoystick } from "react-icons/pi";
import { ImFilePdf } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const navApps = [
  { icon: <PiToolbox />, label: "The Toolbox", to: "/quant-tools" },
  { icon: <IoFolderOpenOutline />, label: "The Archive", to: "/quant-notes" },
  { icon: <PiVault />, label: "The Vault", to: "/quant-projects" },
  { icon: <PiJoystick />, label: "The Arcade", to: "/quant-games" },
  { icon: <ImFilePdf />, label: "Resume", to: "/resume" },
  { icon: <FiGithub />, label: "GitHub", url: "https://github.com/NickPetrykowycz", external: true },
  { icon: <CiLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/nicholas-petrykowycz/", external: true },
  { icon: <MdOutlineEmail />, label: "Email", url: "mailto:nick.petrykowycz@gmail.com", external: true },
];

function HomePage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic className="shadow-[0_0_60px_8px_#22c55e99] border-4 border-green-400 rounded-3xl transition-all duration-300">
        <div className="flex flex-row-reverse w-full h-full">
          {/* Right-side Info Panel with subtle border and reduced glow */}
          <div className="w-1/3 flex flex-col items-center justify-center h-full">
            <div className="w-full h-full flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-black/90 px-10 py-12">
              <ProfileCard
                className=""
                imageSize="w-70 h-70"
                nameSize="text-4xl"
                locationSize="text-xl"
                creatorSize="text-xl"
              />
              <ClockWidget timeSize="text-4xl" dateSize="text-lg"/>
              <WeatherWidget iconSize="w-16 h-16" tempSize="text-2xl" descSize="text-lg" />
            </div>
          </div>
          {/* Left-side Navigation: Grid layout, evenly spaced icons */}
          <div className="w-2/3 flex flex-col items-center justify-center">
            <div
              className="
                grid
                grid-cols-4
                grid-rows-2
                gap-x-0 gap-y-20
                place-items-center
                min-h-[34rem]
                m-8
                w-full
              "
            >
              {navApps.map((app, idx) =>
                app.url ? (
                  <FlexibleIconButton
                    key={app.label}
                    icon={app.icon}
                    label={app.label}
                    iconSize="6rem"
                    labelClassName="text-xl mt-2"
                    className="hover:text-green-400 transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      window.open(app.url, "_blank", "noopener,noreferrer");
                    }}
                  />
                ) : (
                  <FlexibleIconButton
                    key={app.label}
                    icon={app.icon}
                    label={app.label}
                    to={app.to}
                    iconSize="6rem"
                    labelClassName="text-xl mt-2"
                    className="hover:text-green-400 transition-colors"
                  />
                )
              )}
            </div>

          </div>
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default HomePage;
