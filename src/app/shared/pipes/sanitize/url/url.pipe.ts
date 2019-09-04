import { PipeTransform, Pipe, Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable()
@Pipe({
  name: 'sanitizeUrl',
  pure: false // required to update the value when the promise is resolved
})
export class SanitizeUrl implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(v: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(v);
  }
}
