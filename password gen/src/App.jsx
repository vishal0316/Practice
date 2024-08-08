import { useCallback, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(true);
  const [char, setChar] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, char, setPassword]);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl font-semibold">Password Generator</h1>
      <div className="mt-10 border-gray-700 border-2 p-6">
        <div className="flex items-center justify-center">
          <input
            className="h-10 w-80 rounded-s-xl bg-transparent p-3 border-gray-700 border-2 outline-none"
            type="text"
            name=""
            id=""
          />
          <button className="border-none p-2 rounded-e-xl bg-blue-600">
            copy
          </button>
        </div>
        <div className="flex">
          <input
            type="range"
            min={6}
            max={60}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <p>Password length: {length}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <p>Numbers </p>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p>Characters</p>
        </div>
      </div>
    </div>
  );
};

export default App;
