import { DoublyLinkedList } from "./doubly_linked_list";

type UndoRedoProps<T> = {
  id: string;
  timestamp: number;
  snapshot: T;
};

export class UndoRedo<T> {
  undoStack: DoublyLinkedList<UndoRedoProps<T>>;
  redoStack: DoublyLinkedList<UndoRedoProps<T>>;

  constructor() {
    this.undoStack = new DoublyLinkedList<UndoRedoProps<T>>();
    this.redoStack = new DoublyLinkedList<UndoRedoProps<T>>();
  }

  private idGenerator() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      char
    ) {
      let random = (Math.random() * 16) | 0;
      let id = char === "x" ? random : (random & 0x3) | 0x8;
      return id.toString(16);
    });
  }

  add(val: T) {
    if (this.undoStack?.length === 0 && this.redoStack?.length > 0) {
      this.redoStack?.reset();
    }

    const id = this.idGenerator();
    const timestamp = Date.now();

    const node = this.undoStack?.push({ snapshot: val, id, timestamp });

    return node;
  }

  undo() {
    const node = this.undoStack?.pop();
    if (node) this.redoStack?.push(node.val);
  }

  redo() {
    const node = this.redoStack?.pop();
    if (node) this.undoStack?.push(node.val);
  }

  getAllUndo() {
    return this.undoStack.print();
  }

  getAllRedo() {
    return this.redoStack.print();
  }
}
