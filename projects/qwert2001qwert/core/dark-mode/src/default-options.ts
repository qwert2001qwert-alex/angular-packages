import {DarkModeOptions} from './types';

/**
 * Default options used in DarkModeService
 */
export const defaultOptions: DarkModeOptions = {
	darkModeClass: 'dark',
	lightModeClass: 'light',
	preloadingClass: 'dark-mode-preloading',
	storageKey: 'dark-mode',
	element: document.body,
};
