import React from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import FlexibleIconButton from '../components/FlexibleIconButton';
import { IoFolderOpenOutline } from "react-icons/io5";

function HomePage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center mt-8">
            <FlexibleIconButton
              icon={<IoFolderOpenOutline />}
              label="Quant Tools"
              to="/quant-tools"
            />
            </div>
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default HomePage;
