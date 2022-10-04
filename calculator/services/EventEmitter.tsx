export enum Events {
  SET_TITLE = 'set_title',
  NUMBER_CRUNCHER = 'numberCruncher',
  TOGGLE_MEMPORIES = 'toggle-memories'
}
export const eventEmitter = {
  _events: {},
  dispatch(event: Events, data: any) {
    if (!this._events[event]) return;
    this._events[event].forEach((callback) => callback(data));
  },
  subscribe(event: Events, callback: (data: any) => any) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
  unsubscribe(event: Events) {
    if (!this._events[event]) return;
    delete this._events[event];
  },
};
