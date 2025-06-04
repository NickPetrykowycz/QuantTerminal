import React from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import FlexibleIconButton from '../components/FlexibleIconButton';
import { IoFolderOpenOutline } from "react-icons/io5";
import { PiToolbox, PiVault, PiJoystick} from "react-icons/pi";
import ProfilePic from "../assets/ProfilePic.png";

function HomePage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic>
        <div className='flex flex-row-reverse w-full h-full'>
          <div className='w-1/3'>
            {/* Profile Content Card */}
              <img src={ProfilePic} alt="Profile" className="your-classnames h-1/2" />
              <p>
                Name: Nick Petrykowycz
              </p>
              <p>
                Location: Sydney, Australia
              </p>
              <p>
                Phone: +61 401 560 569
              </p>
              <p>
                Email: nick.petrykowycz@gmail.com
              </p>
              <p>
                Qualifications:
                - Bachelor of Science (Computer Science) | UNSW
                - Master of Quantitative Finance | UTS (currently enrolled)
              </p>
              <p>
                Interests:
                - Algorithmic Trading
                - Game Development
                - Machine Learning
                - Data Science
              </p>
              <button className="bg-green-500 text-black font-bold py-2 px-4 rounded mt-4">
                My Resume
              </button>
          </div>
          <div className='w-2/3'>
            <div className='h-1/6 flex flex-row justify-center items-center p-4'>
            {/* time bar */}
              <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="Temp"
                  to="/quant-tools"
                />
                <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="Temp"
                  to="/quant-tools"
                />
                <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="Temp"
                  to="/quant-tools"
                />
            </div>
            <div className="w-full h-2/3 flex flex-col items-center justify-center">
              <div className="flex flex-wrap justify-center mt-8">
                <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="The Toolbox"
                  to="/quant-tools"
                />
                <FlexibleIconButton
                  icon={<IoFolderOpenOutline />}
                  label="The Archive"
                  to="/quant-notes"
                />
                <FlexibleIconButton
                  icon={<PiVault />}
                  label="The Vault"
                  to="/quant-projects"
                />
                <FlexibleIconButton
                  icon={<PiJoystick />}
                  label="The Arcade"
                  to="/quant-games"
                />
              </div>
            </div>
            <div className='h-1/6 flex flex-row justify-center items-center p-4'>
            {/* bottom bar */}
              <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="Temp"
                  to="/quant-tools"
                />
                <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="Temp"
                  to="/quant-tools"
                />
                <FlexibleIconButton
                  icon={<PiToolbox />}
                  label="Temp"
                  to="/quant-tools"
                />
            </div>
          </div>
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default HomePage;
