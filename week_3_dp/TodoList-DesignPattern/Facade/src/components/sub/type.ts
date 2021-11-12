export interface ITodoData {
  id: number;
  content: string;
  completed: boolean;
}
export interface IListOptions {
  wrapperEl: HTMLElement;
  todoData: ITodoData[];
}
export interface IInputOptions {
  wrapperEl: HTMLElement;
  placeholderText: string;
  buttonText: string;
}