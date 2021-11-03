import { IEpisode } from "./episode";
import { seasonify } from "../utils/seasonify";

interface IEpisodePicker {
  episodes: IEpisode[];
  input: string;
  onChange: (value: string) => void;
}

export function EpisodePicker(props: IEpisodePicker): JSX.Element {
  return (
    <>
      <label htmlFor="episode-picker">Pick an episode: </label>
      <select
        id="episode-picker"
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value="">Choose an episode</option>
        {props.episodes.map((episode) => {
          return (
            <option key={episode.id} value={episode.name}>
              {seasonify(
                String(episode.season),
                String(episode.number),
                episode.name
              )}
            </option>
          );
        })}
      </select>
    </>
  );
}
