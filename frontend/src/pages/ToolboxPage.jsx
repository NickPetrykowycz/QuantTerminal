import React from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import FlexibleIconButton from '../components/FlexibleIconButton';
import { PiToolbox } from "react-icons/pi";
import InfoPanel from '../components/InfoPanel';


const navApps = [
  { icon: <PiToolbox />, label: "OptiPrice", to: "/toolbox/optiprice" },
];

function ToolBoxPage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic className="shadow-[0_0_60px_8px_#22c55e99] border-4 border-green-400 rounded-3xl transition-all duration-300">
        <div className="flex flex-row-reverse w-full h-full">
          <div className="w-1/3 flex flex-col items-center justify-center">
          <InfoPanel />
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center">
            <div
              className="
                grid
                grid-cols-4
                grid-rows-2
                gap-x-0 gap-y-20
                place-items-center
                min-h-[34rem]

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

export default ToolBoxPage;
