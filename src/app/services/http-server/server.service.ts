import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  serverUrl: string = '';
  userToken: boolean = true;

  constructor(private _http: HttpService) {
    this.initServerUrl();
  }

  static getServerUrl() {
    return environment.serverUrl;
  }

  initServerUrl() {
    this.serverUrl = HttpServerService.getServerUrl();
  }

  getUrl(url: string): string {
    return this.serverUrl + url;
  }

  getOptions() {
    const json = { 'Content-Type': 'application/json' };
    if (this.userToken) {
      const token = this.getToken();
      if (token) {
        json['token'] = token;
      }
    }
    const headers = new HttpHeaders(json);

    return { headers: headers };
  }

  handleError(error) {
    if (error.status === 404) {
      return Promise.reject('Please check your internet connection.');
    } else {
      const defaultErrorText = 'Please check your internet connection.';
      let err = error.error.type || defaultErrorText;
      if (err === 'error') {
        err = defaultErrorText;
      }

      return Promise.reject(err);
    }
  }

  /* TOKEN */
  getToken(): any {
    return localStorage.getItem('token');
  }

  setToken(t): void {
    localStorage.setItem('token', t);
  }

  /* HTTPs request */
  get(url, options = {}): Promise<any> {
    return this._http
      .get(this.getUrl(url), { ...this.getOptions(), ...options })
      .catch(this.handleError);
  }

  post(url, params = {}, options = {}): Promise<any> {
    return this._http
      .post(this.getUrl(url), params, { ...this.getOptions(), ...options })
      .catch(this.handleError);
  }

  put(url, params = {}, options = {}): Promise<any> {
    return this._http
      .put(this.getUrl(url), params, { ...this.getOptions(), ...options })
      .catch(this.handleError);
  }

  delete(url, options = {}): Promise<any> {
    return this._http
      .delete(this.getUrl(url), { ...this.getOptions(), ...options })
      .catch(this.handleError);
  }

  download(url, documentName) {
    const oReq = new XMLHttpRequest();
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

    return promise;
  }
}
