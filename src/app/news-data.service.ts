import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://gnews.io/api/v4/search?q=example&token=073688608d89c6bbad19144d2198a712')

  }
}
