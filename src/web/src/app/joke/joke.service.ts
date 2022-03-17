import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient
  ) { }

  async fetchJoke(): Promise<any> {
    return this.http.get<any>(`${environment.apiUrl}/joke/random`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    }).toPromise();
  }
}
