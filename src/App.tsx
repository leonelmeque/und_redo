import { useState } from "react";
import "./styles.scss";
import { InputForm } from "./components/input_form";
import { useUndoRedo } from "./hooks/use_undo_redo";
import { UpdatesSection } from "./components/updates_section";
import { UndoRedoActions } from "./components/undo_redo_actions";
import { ChangesHistory } from "./components/changes_history";

export default function App() {
  const {
    undoAction,
    redoAction,
    insertValue,
    undoHistory,
    redoHistory,
    changesHistory,
    resetHistory
  } = useUndoRedo();
  const [text, setText] = useState<string>("");

  const history = changesHistory();

  return (
    <div className="App">
      <InputForm
        value={text}
        onChange={(e) => setText(e?.target.value || "")}
        onClick={(text) => {
          insertValue(text);
          setText("");
        }}
      />
      <UndoRedoActions
        redoAction={redoAction}
        undoAction={undoAction}
        disabledRedo={!redoHistory.length}
        disableUndo={!undoHistory.length}
      />
      <div className="changes-container">
        <UpdatesSection updates={undoHistory} />
        <ChangesHistory history={history} resetHistory={resetHistory} />
      </div>
    </div>
  );
}
