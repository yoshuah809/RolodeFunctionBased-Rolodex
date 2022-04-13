import "./styles.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (e) => {
    const searchFieldstr = e.target.value;
    setSearchField(searchFieldstr);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />

      <CardList monsters={filteredMonsters} />
      {/* <button className="btn btn-outline-primary">Change Name</button> */}
    </div>
  );
};

export default App;
