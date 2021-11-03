import { filterSearchInput } from "./filterSearchInput";

const data = {
  id: 4952,
  url: "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
  name: "Winter is Coming",
  season: 1,
  number: 1,
  type: "regular",
  airdate: "2011-04-17",
  airtime: "21:00",
  airstamp: "2011-04-18T01:00:00+00:00",
  runtime: 60,
  rating: { average: 8.7 },
  image: null,
  summary:
    "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
  _links: { self: { href: "https://api.tvmaze.com/episodes/4952" } },
};

test("greet returns a string, greeting the passed name", () => {
  expect(filterSearchInput("Winter is Coming", data, "")).toBe(true);
  expect(filterSearchInput("winter", data, "")).toBe(true);
  expect(filterSearchInput("What the hell", data, "")).toBe(false);
  expect(filterSearchInput("refrigerator", data, "")).toBe(false);
  expect(
    filterSearchInput(
      "S01E01 - Winter is Coming",
      data,
      "S01E01 - Winter is coming"
    )
  ).toBe(true);
  expect(filterSearchInput("", data, "S01E01 - Winter is coming")).toBe(true);
  expect(filterSearchInput("", data, "S01E02 - Winter is coming")).toBe(false);
});
