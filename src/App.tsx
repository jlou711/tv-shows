import { useEffect, useState } from "react";
import { Episode } from "./components/episode";
import { SearchBar } from "./components/searchBar";
import { EpisodePicker } from "./components/episodePicker";
import { filterSearchInput } from "./utils/filterSearchInput";
import { ShowPicker } from "./components/showPicker";
import showData from "./data/shows.json";
import { Show } from "./components/showCard";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [showInput, setShowInput] = useState(""); //Game of Thrones
  const [episodeInput, setEpisodeInput] = useState("");
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (showInput) {
      const loadEpisodes = async () => {
        const resp = await fetch(
          `https://api.tvmaze.com/shows/${showInput}/episodes`
        );
        const jsonBody = await resp.json();
        setEpisodes(jsonBody);
      };
      loadEpisodes();
    }
  }, [showInput]);
  const filteredEpisodes = episodes.filter((x) =>
    filterSearchInput(searchInput, x, episodeInput)
  );

  function handleReset() {
    setShowInput("");
    setEpisodeInput("");
    setSearchInput("");
  }

  return (
    <>
      {showInput ? (
        <>
          <header className="nav-bar">
            <h1>📺 TV Shows</h1>
            <h3 onClick={handleReset}>⏪ Return to shows</h3>
            <EpisodePicker
              episodes={episodes}
              input={episodeInput}
              onChange={setEpisodeInput}
            ></EpisodePicker>
            <SearchBar
              input={searchInput}
              onChange={setSearchInput}
            ></SearchBar>
            <p>
              Displaying {filteredEpisodes.length} of {episodes.length} episodes
            </p>
          </header>
          <main className="main-episode">
            {filteredEpisodes.map((x, i) => {
              return <Episode key={i} {...x} />;
            })}
          </main>
        </>
      ) : (
        <>
          <header className="nav-bar">
            <h1>📺 TV Shows</h1>
            <ShowPicker shows={showData} onChange={setShowInput}></ShowPicker>
          </header>
          <main className="main-show">
            {showData.map((x) => {
              return <Show props={x} onClick={setShowInput} key={x.id} />;
            })}
          </main>
        </>
      )}
      <footer>
        <a href="https://tvmaze.com/">
          CREDITS TO TVMAZE FOR PROVIDING THE DATA USED{" "}
        </a>
      </footer>
    </>
  );
}

export default App;
