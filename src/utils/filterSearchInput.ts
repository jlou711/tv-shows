import { IEpisode } from "../components/episode";
import { seasonify } from "./seasonify";

export function filterSearchInput(
  searchInput: string,
  arr: IEpisode,
  episodeInput: string
): boolean {
  if (episodeInput) {
    return seasonify(String(arr.season), String(arr.number), arr.name)
      .toLocaleLowerCase()
      .includes(episodeInput.toLowerCase());
  } else {
    return (
      arr.name.toLocaleLowerCase().includes(searchInput.toLowerCase()) ||
      arr.summary.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
}
