import { Episode, IEpisode } from "./components/episode";
import episodes from "./episodes.json";

function mergeArray(arr: IEpisode[]): IEpisode[][] {
  const returnArray = [];
  const l = arr.length;
  for (let i = 0; i < l; i += 3) {
    returnArray.push([...arr.splice(0, 3)]);
  }
  return returnArray;
}
const mergedEpisodes = mergeArray(episodes);

function App(): JSX.Element {
  return (
    <>
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
