import { IEventBus } from "../event-bus";

export interface IBlock<T> {
  _element: HTMLElement | null;
  _meta: { tagName: string; props: T };
  props: T;
  eventBus: () => IEventBus;
  render: () => string | void;
}
export type TPropsObj<T> = {
  events?: Record<string, (e: Event) => void>;
} & T;
export type TProps =
  | string
  | number
  | string[]
  | number
  | Record<string, (e: Event) => void>
  | IBlock<Record<string, TProps>>;
