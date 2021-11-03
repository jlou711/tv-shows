import { seasonify } from "../utils/seasonify";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image?: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  _links: { self: { href: string } };
}

export function Episode(props: IEpisode): JSX.Element {
  return (
    <>
      <section className="card-episode">
        {props.image ? (
          <img src={props.image.medium} alt={props.name} />
        ) : (
          <img src="" alt={props.name} />
        )}
        <h1 className="siteTitle">
          {seasonify(String(props.season), String(props.number), props.name)}
        </h1>
        <p className="card-summary">
          {props.summary
            .replaceAll(/(<\/?p>)/g, "")
            .replaceAll(/(<\/?br>)/g, "")}
        </p>
      </section>
    </>
  );
}
