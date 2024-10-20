import { EEvents, TCallBack } from "../../types";

export interface IEventBus {
  listeners: Partial<Record<EEvents, TCallBack[]>>;
  on: (event: EEvents, callback: TCallBack) => void;
  off: (event: EEvents, callback: TCallBack) => void;
  emit: (event: EEvents, ...args: any[]) => void;
}
