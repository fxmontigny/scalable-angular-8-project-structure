import {NgModule} from '@angular/core';
import {SanitizeUrl} from './sanitize/url/url.pipe';

const list = [
	SanitizeUrl
];

@NgModule({
	declarations: [
		...list
	],
	exports: list
})
export class PipesModule {
}