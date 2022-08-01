import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  postservices(url: string, reqdata: any, token: boolean, httpOptions: any = {}) {
    return this.http.post(this.baseurl + url, reqdata, token && httpOptions);
  }
  putservices(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.http.put(this.baseurl + url, reqdata, token && httpOptions);
  }
  deleteService(url: string, token: boolean = false, httpOptions: any = {}) {
    return this.http.delete(this.baseurl + url, token && httpOptions);
  }

  getService(url: string = '', tokenRequired: boolean = false, httpOptions: any = {}) {
    return this.http.get(this.baseurl + url, tokenRequired && httpOptions)
  }

}
