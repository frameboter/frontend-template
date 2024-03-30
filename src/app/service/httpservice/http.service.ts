import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private domain: string;
  private prefix: string;

  constructor(private httpClient: HttpClient) {
    this.domain = "." + environment.baseDomain + "/api/";
    this.prefix = environment.protocol + "://" + environment.servicePrefix;
  }

  public sendPostRequest(service: string, path: string, body: any): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    return this.httpClient.post(url, body)
  }

  public sendGetRequest(service: string, path: string): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    return this.httpClient.get(url)
  }

  public sendPutRequest(service: string, path: string, body: string): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    return this.httpClient.put(url,body)
  }

  public sendDeleteRequest(service: string, path: string): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    return this.httpClient.delete(url)
  }
}
