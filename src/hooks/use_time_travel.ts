import { useContext } from "react";
import { TimeTravelContext } from "../context/time_travel_context";
import { bubbleSort } from "../helpers/bubble_sort";

export const useTimeTravel = () => {
  const timeline = useContext(TimeTravelContext);
  console.log(timeline.history);
  const getTimeline = () => {
    const sorted = bubbleSort([...timeline.history], "timestamp");
    return sorted;
  };

  const addTimelineEvent = (val) => {
    timeline.updateHistory(val);
  };

  const resetTimeline = () => timeline.reset();

  const getPartialTimeline = (
    from: number,
    to: number = timeline.history.length - 1
  ) => {
    const _timeline = getTimeline();
    return _timeline.splice(from, to);
  };

  return {
    getTimeline,
    addTimelineEvent,
    resetTimeline,
    getPartialTimeline
  };
};
