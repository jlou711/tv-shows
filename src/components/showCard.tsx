import { IShow } from "./IShow";

interface ShowProps {
  props: IShow;
  onClick: (value: string) => void;
}

export function Show(props: ShowProps): JSX.Element {
  return (
    <>
      <section className="card-show">
        <div className="card-show-top">
          {props.props.image ? (
            <img
              src={props.props.image.medium}
              alt={props.props.name}
              onClick={() => props.onClick(props.props.id.toString())}
            />
          ) : (
            <img src="" alt={props.props.name} />
          )}
        </div>
        <h1 className="showTitle">{props.props.name}</h1>
        <p className="card-summary-show">
          {props.props.summary &&
            props.props.summary
              .replaceAll(/(<\/?p>)/g, "")
              .replaceAll(/(<\/?br>)/g, "")
              .replaceAll(/(<\/?b>)/g, "")}
        </p>
        <div className="card-show-details">
          <p>
            Ratings:{" "}
            {props.props.rating.average ? props.props.rating.average : "N/A"}
          </p>
          <p>Genres: {props.props.genres.join(" | ")}</p>
          <p>
            {props.props.status.toLowerCase() !== "ended"
              ? `Status: ${props.props.status}`
              : `Status: ${props.props.status} on ${props.props.ended}`}
          </p>
        </div>
      </section>
    </>
  );
}
