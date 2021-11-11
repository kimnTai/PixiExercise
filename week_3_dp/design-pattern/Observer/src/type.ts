export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export enum EVENT_TYPE {
  ADD = "add",
  REMOVE = "remove",
  TOGGLE = "toggle",
}
