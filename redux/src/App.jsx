import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementbyfive } from "./store/reducers/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-gray-100 p-4">
      <div className="space-y-4 ">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementbyfive())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Increment
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
