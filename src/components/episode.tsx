import { seasonify } from "../utils/seasonify";
import { IEpisode } from "./IEpisode";

export function Episode(props: IEpisode): JSX.Element {
  return (
    <>
      <section className="card-episode">
        <div className="card-episode-top">
          {props.image ? (
            <img src={props.image.medium} alt={props.name} />
          ) : (
            <img src="" alt={props.name} />
          )}
        </div>
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
