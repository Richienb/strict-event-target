import type {ValueOf} from 'type-fest';

type EventListenerOrEventListenerObject<Value extends Event | CustomEvent> = (value: Value) => void | {
	handleEvent(value: Value): void;
};

/**
Strictly typed definitions for [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

Only used for type-checking; compiles to no code.

@example
```
import type StrictEventTarget from 'strict-event-target';

const target = new (EventTarget as typeof StrictEventTarget<{
	foo: string; // Event with data
}, [
	'bar', // Event without data
]>);

target.dispatchEvent(new CustomEvent('foo', {detail: 'The'}));

target.dispatchEvent(new Event('bar'));
```

@example
```
import type StrictEventTarget from 'strict-event-target';

class Foo extends (EventTarget as typeof StrictEventTarget<{
	foo: string; // Event with data
}, [
	'bar', // Event without data
]>) {}
```
*/
export default class StrictEventTarget<EventsWithData extends Record<string, unknown> = {}, EventsWithoutData extends string[] = []> implements EventTarget { // eslint-disable-line @typescript-eslint/ban-types
	addEventListener<Name extends keyof EventsWithData>(name: Name, callback: EventListenerOrEventListenerObject<CustomEvent<EventsWithData[Name]>> | null, options?: AddEventListenerOptions | boolean): void; // eslint-disable-line @typescript-eslint/ban-types
	addEventListener<Name extends ValueOf<EventsWithoutData>>(name: Name, callback: EventListenerOrEventListenerObject<Event> | null, options?: AddEventListenerOptions | boolean): void; // eslint-disable-line @typescript-eslint/ban-types

	dispatchEvent(event: Event | CustomEvent<ValueOf<EventsWithData>>): boolean;

	removeEventListener<Name extends keyof EventsWithData>(name: Name, callback: EventListenerOrEventListenerObject<CustomEvent<EventsWithData[Name]>> | null, options?: EventListenerOptions | boolean): void; // eslint-disable-line @typescript-eslint/ban-types
	removeEventListener<Name extends ValueOf<EventsWithoutData>>(name: Name, callback: EventListenerOrEventListenerObject<Event> | null, options?: EventListenerOptions | boolean): void; // eslint-disable-line @typescript-eslint/ban-types
}
