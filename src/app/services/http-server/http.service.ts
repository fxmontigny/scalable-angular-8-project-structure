import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Mocks from '../../../../mocks';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  mocks = new Mocks();

  constructor(private _http: HttpClient) {}

  isMock(options) {
    return environment.mock || options.mock;
  }

  mockChecking(url, type, options) {
    if (this.isMock(options)) {
      return this.mocks.mock(url.replace(environment.serverUrl, ''), type);
    }
  }

  /* HTTPs request */
  get(url, options = {}): Promise<any> {
    const mock = this.mockChecking(url, 'get', options);
    if (mock) {
      return mock;
    } else {
      return this._http.get(url, options).toPromise();
    }
  }

  post(url, params = {}, options = {}): Promise<any> {
    const mock = this.mockChecking(url, 'post', options);
    if (mock) {
      return mock;
    } else {
      return this._http.post(url, params, options).toPromise();
    }
  }

  put(url, params = {}, options = {}): Promise<any> {
    const mock = this.mockChecking(url, 'put', options);
    if (mock) {
      return mock;
    } else {
      return this._http.put(url, params, options).toPromise();
    }
  }

  delete(url, options = {}): Promise<any> {
    const mock = this.mockChecking(url, 'delete', options);
    if (mock) {
      return mock;
    } else {
      return this._http.delete(url, options).toPromise();
    }
  }

  // TODO
  download(url, documentName) {
    /*const oReq = new XMLHttpRequest();
    const promise = new Promise((resolve, reject) => {
      if (documentName !== null) {
        oReq.open('GET', this.serverUrl + url, true);
        oReq.responseType = 'blob';

        oReq.onload = function() {
          switch (oReq.status) {
            case 200:
              const blob = oReq.response,
                url = (window.URL || window['webkitURL']).createObjectURL(blob),
                link = document.createElement('a');
              link.setAttribute('href', url);
              link.setAttribute('download', documentName);
              link.click();
              resolve();
              break;
            default:
              reject('Document not found');
              break;
          }
        };
        oReq.setRequestHeader('token', this.getToken());
        oReq.send();
      } else {
        reject('Document name is null');
      }
    });

    return promise;*/
  }
}
