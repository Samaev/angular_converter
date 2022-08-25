import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from'@angular/common/http';
import { catchError, delay, Observable, retry, throwError } from "rxjs";
import { Tax } from "../models/Taxes";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root',
})

export class RatesService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) {
  }

  getAll(): Observable<Tax[]> {
    return this.http.get<Tax[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').pipe(
      delay(1000),
      retry(2),
      catchError(this.errorHandler.bind(this)
      )
    )

  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(()=> error.message)
  }
}
