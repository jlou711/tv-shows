import { useState } from "react";
import { Episode, IEpisode } from "./components/episode";
import { SearchBar } from "./components/searchBar";
import episodes from "./episodes.json";

function mergeArray(arr: IEpisode[]): IEpisode[][] {
  const returnArray = [];
  const l = arr.length;
  for (let i = 0; i < l; i += 3) {
    returnArray.push([...arr.splice(0, 3)]);
  }
  return returnArray;
}

function filterSearchInput(searchInput: string, arr: IEpisode): boolean {
  return (
    arr.name.toLocaleLowerCase().includes(searchInput.toLowerCase()) ||
    arr.summary.toLowerCase().includes(searchInput.toLowerCase())
  );
}
const totalEpisodes = episodes.length;

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const filteredEpisodes = episodes.filter((x) =>
    filterSearchInput(searchInput, x)
  );
  const filteredLength = filteredEpisodes.length;
  const mergedEpisodes = mergeArray(filteredEpisodes);
  return (
    <>
      <header>
        <div>
          <SearchBar input={searchInput} onChange={setSearchInput}></SearchBar>
          <p>
            Displaying {filteredLength} of {totalEpisodes} episodes
          </p>
        </div>
      </header>
      <main>
        <table>
          <tbody>
            {mergedEpisodes.map((x, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Episode {...x[0]} />
                  </td>
                  <td>{x[1] ? <Episode {...x[1]} /> : null}</td>
                  <td>{x[2] ? <Episode {...x[2]} /> : null}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
