import type StrictEventTarget from './index.js';

type EventsWithData = {
	a: string;
};

type EventsWithoutData = ['b'];

const target: StrictEventTarget<EventsWithData, EventsWithoutData> = new (EventTarget as typeof StrictEventTarget<EventsWithData, EventsWithoutData>)();

function aCallback(_event: CustomEvent<string>) {} // eslint-disable-line @typescript-eslint/no-empty-function
function bCallback(_event: Event) {} // eslint-disable-line @typescript-eslint/no-empty-function

target.addEventListener('a', aCallback);
target.addEventListener('b', bCallback);

target.dispatchEvent(new CustomEvent('a', {detail: 'foo'}));
target.dispatchEvent(new Event('b'));

target.removeEventListener('a', aCallback);
target.removeEventListener('b', bCallback);
