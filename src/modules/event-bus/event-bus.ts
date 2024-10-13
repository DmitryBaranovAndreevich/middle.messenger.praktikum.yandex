import { EEvents, TCallBack } from "../../types";
import { IEventBus } from "./event-bus-types";

export class EventBus implements IEventBus {
  listeners: IEventBus["listeners"] = {};
  constructor() {}

  on(event: EEvents, callback: TCallBack) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: EEvents, callback: TCallBack) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: EEvents, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}
