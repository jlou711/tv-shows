import { IEpisode } from "../components/IEpisode";
import { seasonify } from "./seasonify";

export function filterSearchInput(
  searchInput: string,
  arr: IEpisode,
  episodeInput: string
): boolean {
  if (episodeInput) {
    return seasonify(String(arr.season), String(arr.number), arr.name)
      .toLowerCase()
      .includes(episodeInput.toLowerCase());
  } else {
    return (
      arr.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      (arr.summary
        ? arr.summary.toLowerCase().includes(searchInput.toLowerCase())
        : false)
    );
  }
}
