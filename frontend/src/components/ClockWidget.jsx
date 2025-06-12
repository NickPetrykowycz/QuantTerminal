import React, { useEffect, useState } from "react";

export default function ClockWidget({
  timeSize = "text-6xl",
  dateSize = "text-xl"
}) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  // Full day name + full date
  const dateStr = now.toLocaleDateString([], {
    weekday: "long", // full day name
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="flex flex-col items-center ">
      <div className={`${timeSize} font-bold mt-3`}>{now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</div>
      <div className={`${dateSize} mt-2`}>{dateStr}</div>
    </div>
  );
}
