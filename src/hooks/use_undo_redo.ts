import { useRef, useState } from "react";
import { UndoRedo } from "../helpers/undo_redo";
import { useTimeTravel } from "./use_time_travel";

export const useUndoRedo = () => {
  const undoRedoRef = useRef(new UndoRedo<string>());
  const [forceRerender, setForceRerender] = useState<boolean>();
  const historyStack = useRef<any[]>([]);
  const { addTimelineEvent, getTimeline } = useTimeTravel();
  function changesDiff() {
    return !forceRerender;
  }

  function insertValue(val: any) {
    const node = undoRedoRef.current.add(val);
    debugger;
    addTimelineEvent(node.val);
  }

  function undoAction() {
    undoRedoRef.current.undo();
    const diff = changesDiff();
    setForceRerender(diff);
  }

  function redoAction() {
    undoRedoRef.current.redo();
    const diff = changesDiff();
    setForceRerender(diff);
  }

  function changesHistory(from?: number, to?: number) {
    historyStack.current.sort((a, b) => a.timestamp - b.timestamp);

    if (from && to) return historyStack.current.slice(from, to);
    if (from && !to)
      return historyStack.current.slice(from, historyStack.current.length - 1);
    if (!from && to) return historyStack.current.slice(0, to);

    return historyStack.current;
  }

  function resetHistory() {
    historyStack.current = [];
  }

  // create a function that returns the latest change only

  return {
    undoHistory: undoRedoRef.current.getAllUndo(),
    redoHistory: undoRedoRef.current.getAllRedo(),
    insertValue,
    undoAction,
    redoAction,
    changesHistory,
    resetHistory
  };
};
