# strict-event-target

> Strictly typed definitions for [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

Only used for type-checking; compiles to no code.

## Install

```sh
npm install strict-event-target
```

## Usage

```ts
import type StrictEventTarget from 'strict-event-target';

const target = new (EventTarget as typeof StrictEventTarget<{
	foo: string; // Event with data
}, [
	'bar', // Event without data
]>);

target.dispatchEvent(new CustomEvent('foo', {detail: 'The'}));

target.dispatchEvent(new Event('bar'));
```

```ts
import type StrictEventTarget from 'strict-event-target';

class Foo extends (EventTarget as typeof StrictEventTarget<{
	foo: string; // Event with data
}, [
	'bar', // Event without data
]>) {}
```

## API

### StrictEventTarget<EventsWithData?, EventsWithoutData?>

#### EventsWithData

Type: `Record<string, unknown>`\
Default: `{}`

Events that will be created with [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent), thus being able to contain custom data.

#### EventsWithoutData

Type: `string[]`\
Default: `[]`

Events that will be created with [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).
