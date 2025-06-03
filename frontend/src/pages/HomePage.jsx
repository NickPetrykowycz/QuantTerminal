import React from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import FlexibleIconButton from '../components/FlexibleIconButton';
import { IoFolderOpenOutline } from "react-icons/io5";
import { PiToolbox, PiVault, PiJoystick} from "react-icons/pi";
import { BsJoystick } from "react-icons/bs";

function HomePage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic>
        <div className="w-full h-full flex flex-col items-center justify-center">
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
      </BorderContainerStatic>
    </div>
  );
}

export default HomePage;
