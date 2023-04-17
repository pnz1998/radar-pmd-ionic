import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Env } from 'src/app/env';
import { Result } from '../models/apiModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public readonly baseUrl = Env.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private formatErrors(error: any) {
    if (error.error.message === "token verify faild" || error.error.message === "无token，请重新登录") {
      this.router.navigate(['/']);
      return throwError(() => '验证过期, 请重新登录');;
    }
    return  throwError(() => error.error);
  }

  get<T = any>(path: string, params: HttpParams = new HttpParams()): Observable<Result<T>> {
    return this.http.get<Result<T>>(`${this.baseUrl}${path}`, { params })
      .pipe(catchError((e) => this.formatErrors(e)));
  }

  post<T = any>(path: string, body: Object = {}): Observable<Result<T>> {
    return this.http.post<Result<T>>(
      `${this.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((e) => this.formatErrors(e)));
  }

  put<T = any>(path: string, body: Object = {}): Observable<Result<T>> {
    return this.http.put<Result<T>>(
      `${this.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((e) => this.formatErrors(e)));
  }

  delete<T = any>(path: string): Observable<Result<T>> {
    return this.http.delete<Result<T>>(
      `${this.baseUrl}${path}`
    ).pipe(catchError((e) => this.formatErrors(e)));
  }
}