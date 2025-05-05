import { useContext } from "react";
import { GlobalCountContext } from "./contexts";

function Card() {
  const [globalCount, setGlobalCount] = useContext(GlobalCountContext);
  const incrementGlobalCount = () => setGlobalCount((count) => count + 1);

  return (
    <div id="app_shell" className="card">
      <h2>Application Shell</h2>
      <button onClick={incrementGlobalCount}>
        global count is {globalCount}
      </button>
    </div>
  );
}

export default Card;
