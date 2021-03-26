import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private readonly API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.apiURL;
  }

  getData(): Observable<any>{
    return this.http.get<any>(`${this.API_URL}/posts`);
  }
}
