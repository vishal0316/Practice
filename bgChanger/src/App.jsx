import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("green");

  return (
    <div>
      <>
        <div className="h-screen w-full" style={{ backgroundColor: bgColor }}>
          <div className="flex">
            <button
              onClick={() => setBgColor("red")}
              className="outline-none p-3 rounded "
            >
              Red
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default App;
