import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BorderContainerAnimated from '../components/BorderContainerAnimated';

const bootLines = [
  '> Initializing core systems...',
  '> Loading pricing calculators...',
  '> Starting market data feed...',
  '> Compiling quant tools...',
  '> Launching user interface...'
];

const finalLines = [
  ' ',
  '> All systems online.',
  ' ',
  '> Enter password to continue:'
];

function LandingPage() {
  const [title, setTitle] = useState('');
  const [byline, setByline] = useState('');
  const [borderDone, setBorderDone] = useState(false);
  const [currentBootIndex, setCurrentBootIndex] = useState(0);
  const [typedLine, setTypedLine] = useState('');
  const [bootLog, setBootLog] = useState([]);
  const [bootComplete, setBootComplete] = useState(false);
  const [finalIndex, setFinalIndex] = useState(0);
  const [password, setPassword] = useState('');

  // Animation states
  const [step, setStep] = useState("main"); // "main", "fading", "welcome-in", "welcome-out"
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const blink = setInterval(() => {}, 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (borderDone) {
      const fullTitle = 'QUANT TERMINAL v1.0';
      if (title.length < fullTitle.length) {
        const timeout = setTimeout(() => {
          setTitle(prev => fullTitle.substring(0, prev.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const fullByline = 'BY NICHOLAS PETRYKOWYCZ';
        let index = 0;
        const interval = setInterval(() => {
          setByline(fullByline.substring(0, index + 1));
          index++;
          if (index === fullByline.length) {
            clearInterval(interval);
          }
        }, 30);
        return () => clearInterval(interval);
      }
    }
  }, [title, borderDone]);

  useEffect(() => {
    if (byline && currentBootIndex < bootLines.length) {
      const line = bootLines[currentBootIndex];
      let charIndex = 0;
      let typed = '';

      const interval = setInterval(() => {
        if (charIndex <= line.length) {
          typed = line.substring(0, charIndex);
          setTypedLine(typed);
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setBootLog(prev => [...prev, `${line.padEnd(50)}[OK]`]);
            setTypedLine('');
            setCurrentBootIndex(i => i + 1);
          }, 500);
        }
      }, 20);

      return () => clearInterval(interval);
    } else if (byline && currentBootIndex === bootLines.length && finalIndex < finalLines.length) {
      const line = finalLines[finalIndex];
      let charIndex = 0;
      let typed = '';

      const interval = setInterval(() => {
        if (charIndex <= line.length) {
          typed = line.substring(0, charIndex);
          setTypedLine(typed);
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setBootLog(prev => [...prev, line]);
            setTypedLine('');
            if (finalIndex === finalLines.length - 1) {
              setBootComplete(true);
            } else {
              setFinalIndex(i => i + 1);
            }
          }, 200);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [byline, currentBootIndex, finalIndex]);

  // Handlers for password and animation sequencing
  const handlePasswordEnter = (e) => {
    if (e.key === 'Enter' && password.length > 0) {
      setStep("fading");
      setTimeout(() => {
        setStep("welcome-in");
        setExpanded(true); // Start the border grow at the same time
        setTimeout(() => {
          setStep("welcome-out"); // Start fading out WELCOME
          setTimeout(() => {
            navigate('/home');
          }, 600); // Fade out WELCOME duration
        }, 1200); // Show welcome+grow for 1.2s (should match border grow duration)
      }, 500); // Fade out main content
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex justify-center items-center p-4">
      <BorderContainerAnimated expanded={expanded} onAnimationEnd={() => setBorderDone(true)}>
        {/* Boot content, fades out */}
        {(step === "main" || step === "fading") && (
          <div
            className={`flex flex-col justify-between h-full w-full transition-opacity duration-500 ${step === "fading" ? "opacity-0" : "opacity-100"}`}
          >
            <div className={`transition-opacity duration-300 ${borderDone ? 'opacity-100' : 'opacity-0'} h-full flex flex-col justify-start items-start`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 text-glow">{title}</h1>
              <p className="text-md md:text-lg lg:text-xl text-glow uppercase">{byline}</p>
            </div>
            <div className="text-left text-md text-glow whitespace-pre">
              <div>
                {bootLog.map((line, idx) => {
                  if (line.startsWith('> Enter password to continue')) {
                    return (
                      <p key={idx} className="flex items-center">
                        <label htmlFor="boot-password">{line}</label>
                        <input
                          id="boot-password"
                          type="password"
                          className="ml-1 w-full bg-transparent border-none outline-none text-green-400 placeholder-green-600 caret-green-500 caret-[6px] caret-blink text-glow"
                          placeholder=""
                          autoFocus
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyDown={handlePasswordEnter}
                        />
                      </p>
                    );
                  } else {
                    return <p key={idx}>{line}</p>;
                  }
                })}
                {!bootComplete && typedLine && <p>{typedLine}</p>}
              </div>
            </div>
          </div>
        )}
        {/* WELCOME message, fade in/out */}
        {(step === "welcome-in" || step === "welcome-out") && (
          <div className={`w-full h-full flex flex-col items-center justify-center transition-opacity duration-400 ${step === "welcome-in" ? "opacity-100" : "opacity-0"}`}>
            <h2 className="text-5xl text-green-400 font-mono text-glow">WELCOME</h2>
          </div>
        )}
      </BorderContainerAnimated>
    </div>
  );
}

export default LandingPage;
