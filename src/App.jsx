import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {data.map((textData, idx) => (
        <h1 key={idx}>{textData.name}</h1>
      ))}
    </>
  );
}

export default App;
