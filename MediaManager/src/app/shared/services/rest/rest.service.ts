import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export abstract class RestService<T> {
  constructor(protected http: HttpClient) {}
  abstract getUri();

  getMedia(): Observable<T[]> {
    return this.http.get<T[]>(`${this.getUri()}`).pipe(
      map((response: T[]) => {
        return response;
      })
    );
  }
}
