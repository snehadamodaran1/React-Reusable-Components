import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [searchtext, setSearchtext] = useState("");
  const [timer, setTimer] = useState(null);
  const [list, setList] = useState([]);
  const valueList = [
    "Apple",
    "banana",
    "cranberry",
    "cupcakes",
    "dandelions",
    "eagle",
    "fruits",
  ];
  const handleSearch = (e) => {
    setSearchtext(e.target.value);
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    let timerVal = setTimeout(() => {
      console.log("inside timeout", searchtext);
      let filterList = valueList.filter((item) =>
        item.toLowerCase().includes(searchtext.toLowerCase())
      );
      setList(filterList);
      setTimer(null);
    }, 1000);
    setTimer(timerVal);
  }, [searchtext]);

  return (
    <div className="App">
      <h2>Debounced Search</h2>
      <input type="text" value={searchtext} onChange={handleSearch} />
      <ul>
        {list.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
