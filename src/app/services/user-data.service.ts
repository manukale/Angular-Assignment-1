import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }

  private URL = 'http://localhost:3000/user';

  fetchUserData(): Observable<any> {
    return this.http.get(this.URL);
  }

  addUserData(data : any): Observable<any> {
    return this.http.post(this.URL, data)
  }
}
