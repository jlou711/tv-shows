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
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export function Episode(props: IEpisode): JSX.Element {
  return (
    <>
      <section className="card-episode">
        {<img src={props.image.medium} alt={props.name} />}
        <h1 className="siteTitle">
          S{String(props.season).padStart(2, "0")}E
          {String(props.number).padStart(2, "0")} - {props.name}
        </h1>
        <p className="card-summary">
          {props.summary.replaceAll(/(<\/?p>)/g, "")}
        </p>
      </section>
    </>
  );
}
