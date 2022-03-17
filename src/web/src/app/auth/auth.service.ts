import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post(`${environment.apiUrl}/auth/token`, credentials, {
      headers: {
        // Authorization: "something"
      },
    });
  }
}
