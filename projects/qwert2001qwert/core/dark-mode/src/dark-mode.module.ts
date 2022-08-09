import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DarkModeIndicatorComponent} from "./dark-mode-indicator.component";

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DarkModeIndicatorComponent,
	],
	exports: [
		DarkModeIndicatorComponent
	],
})
export class DarkModeModule {
}
