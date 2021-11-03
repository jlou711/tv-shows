/**
 * Function to seasonify an episode name, with provided season and episode number
 * @param episodeSeason string
 * @param episodeNumber string
 * @param episodeName string
 * @returns string with seasonified episode name
 */

export function seasonify(
  episodeSeason: string,
  episodeNumber: string,
  episodeName: string
): string {
  return `S${episodeSeason.padStart(2, "0")}E${episodeNumber.padStart(
    2,
    "0"
  )} - ${episodeName}`;
}
