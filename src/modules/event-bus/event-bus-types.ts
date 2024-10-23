import { TCallBack } from "../../types";

export interface IEventBus<T extends string | number | symbol> {
  listeners: Partial<Record<T, TCallBack[]>>;
  on: (event: T, callback: TCallBack) => void;
  off: (event: T, callback: TCallBack) => void;
  emit: (event: T, ...args: unknown[]) => void;
}
