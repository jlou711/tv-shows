import { IShow } from "./IShow";

interface IShowPicker {
  shows: IShow[];
  onChange: (value: string) => void;
}

export function ShowPicker(props: IShowPicker): JSX.Element {
  return (
    <select id="show-picker" onChange={(e) => props.onChange(e.target.value)}>
      <option value="">Choose a show</option>
      {props.shows.map((show) => {
        return (
          <option key={show.id} value={show.id}>
            {show.name}
          </option>
        );
      })}
    </select>
  );
}
