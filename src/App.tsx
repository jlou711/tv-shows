import { useEffect, useState } from "react";
import { Episode } from "./components/episode";
import { SearchBar } from "./components/searchBar";
import { EpisodePicker } from "./components/episodePicker";
import { filterSearchInput } from "./utils/filterSearchInput";
import { ShowPicker } from "./components/showPicker";
import showData from "./data/shows.json";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [showInput, setShowInput] = useState("82"); //Game of Thrones
  const [episodeInput, setEpisodeInput] = useState("");
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const loadEpisodes = async () => {
      const resp = await fetch(
        `https://api.tvmaze.com/shows/${showInput}/episodes`
      );
      const jsonBody = await resp.json();
      setEpisodes(jsonBody);
    };
    loadEpisodes();
  }, [showInput]);
  const filteredEpisodes = episodes.filter((x) =>
    filterSearchInput(searchInput, x, episodeInput)
  );

  return (
    <>
      <header className="nav-bar">
        <h1>TV Shows</h1>
        <ShowPicker shows={showData} onChange={setShowInput}></ShowPicker>
        <EpisodePicker
          episodes={episodes}
          input={episodeInput}
          onChange={setEpisodeInput}
        ></EpisodePicker>
        <SearchBar input={searchInput} onChange={setSearchInput}></SearchBar>
        <p>
          Displaying {filteredEpisodes.length} of {episodes.length} episodes
        </p>
      </header>
      <main className="main-episode">
        {filteredEpisodes.map((x, i) => {
          return <Episode key={i} {...x} />;
        })}
      </main>
      <footer>
        <a href="https://tvmaze.com/">
          CREDITS TO TVMAZE FOR PROVIDING THE DATA USED{" "}
        </a>
      </footer>
    </>
  );
}

export default App;
