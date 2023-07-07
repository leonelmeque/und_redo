import { UndoRedo } from "./undo_redo";

describe("Undo and Redo Tests", () => {
  test("The user makes 3 changes and then decides to rollback 2", () => {
    const stack = new UndoRedo<any>();

    stack.add("Added something new");
    stack.add("Added something new new");
    stack.add("+ Added something new new");

    stack.undo();
    stack.undo();

    expect(stack.undoStack.length).toEqual(1);
  });

  test("The user makes 3 changes and then decides to rollback 1 but then decides to redo 1", () => {
    const stack = new UndoRedo<any>();

    stack.add("Leonel");
    stack.add("Edviges");
    stack.add("Kylian");

    stack.undo();
    stack.undo();
    stack.redo();
    expect(stack.undoStack.length).toEqual(2);
    expect(stack.redoStack.length).toEqual(1);
  });
});
