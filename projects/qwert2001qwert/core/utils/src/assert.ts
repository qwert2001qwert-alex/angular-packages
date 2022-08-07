import {EMPTY_FUNCTION} from "./empty";

export const appAssert = {
	enabled: false,
	get assert(): (assertion: boolean, ...args: any[]) => void {
		return this.enabled
			? Function.prototype.bind.call(console.assert, console)
			: EMPTY_FUNCTION;
	},
};
