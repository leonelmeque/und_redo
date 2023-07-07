import { FC } from "react";
import { useTimeTravel } from "../hooks/use_time_travel";

type ChangesHistoryProps<T> = {
  history: T[];
  resetHistory: any;
};
export const ChangesHistory: FC<ChangesHistoryProps<any>> = ({
  history = [],
  resetHistory
}) => {
  const { getTimeline } = useTimeTravel();
  const timeline = getTimeline();

  function formatDate(timestamp: number) {
    return !timestamp
      ? ""
      : new Date(timestamp).toLocaleDateString("en-US", {
          dateStyle: "medium"
        });
  }

  return (
    <div className="changes-history">
      <h3>Changes history</h3>
      <button onClick={resetHistory}>Reset history</button>
      <br />
      <ul>
        {!timeline.length && <li>There's no existing changes yet</li>}
        {!!timeline.length &&
          timeline.map(({ snapshot, id, timestamp }) => (
            <li className="history-list-item" key={id}>
              {snapshot} - {formatDate(timestamp)}
            </li>
          ))}
      </ul>
    </div>
  );
};
