import { useState } from "react";
function Btn() {
  const [count, setCount] = useState(0);
  return (<button onClick={() => setCount(count + 1)}>{count}</button>);
}
export default Btn;