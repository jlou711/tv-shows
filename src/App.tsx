import { useState } from "react";
import { Episode } from "./components/episode";
import { SearchBar } from "./components/searchBar";
import { EpisodePicker } from "./components/episodePicker";
import { filterSearchInput } from "./utils/filterSearchInput";
import episodes from "./episodes.json";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [episodeInput, setEpisodeInput] = useState("");
  const filteredEpisodes = episodes.filter((x) =>
    filterSearchInput(searchInput, x, episodeInput)
  );

  return (
    <>
      <header>
        <div className="nav-bar">
          <EpisodePicker
            episodes={episodes}
            input={episodeInput}
            onChange={setEpisodeInput}
          ></EpisodePicker>
          <SearchBar input={searchInput} onChange={setSearchInput}></SearchBar>
          <p>
            Displaying {filteredEpisodes.length} of {episodes.length} episodes
          </p>
        </div>
      </header>
      <main className="main-episode">
        {filteredEpisodes.map((x) => {
          return <Episode key={x.name} {...x} />;
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
