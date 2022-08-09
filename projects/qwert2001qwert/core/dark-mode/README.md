# Dark Mode service

## Installation

To use dark-mode in your project install it via npm:

```
npm i @qwert2001qwert/core
```

## Usage

In order to use dark-mode you need to inject the service somewhere in your applications - presumably where you hold the dark mode toggle, and get the dark mode value from the exported `darkMode$` Observable:

### Service 

```ts
import {DarkModeService} from "@qwert2001qwert/core/dark-mode";
```

```ts
readonly darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

constructor(
    private darkModeService: DarkModeService
) {}

toggleMode(): void {
    this.darkModeService.toggle();
    // .enable();
    // .disable();
}
```

### Component

```ts
import {DarkModeModule} from "@qwert2001qwert/core/dark-mode";
```

```html
<qwert-dark-mode-indicator></qwert-dark-mode-indicator>
```

## Customization

InjectionToken to override default options

### Provider

```ts
providers: [{
    provide: DARK_MODE_OPTIONS, 
	useValue: {
        darkModeClass: 'my-dark-mode', 
		lightModeClass: 'my-light-mode',
	},
}]
```

### Style

```scss
--dark-mode-icon-fill
--dark-mode-icon-fill-hover
--dark-mode-ease-elastic-3
--dark-mode-ease-elastic-4
--dark-mode-ease-out-5
--dark-mode-size
```
