export const UndoRedoActions = ({
  undoAction,
  redoAction,
  disableUndo,
  disabledRedo
}) => {
  return (
    <div className="undo-redo-actions">
      <button onClick={undoAction} disabled={disableUndo}>
        Undo
      </button>
      <button onClick={redoAction} disabled={disabledRedo}>
        Redo
      </button>
    </div>
  );
};
