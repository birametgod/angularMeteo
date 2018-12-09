import { Injectable } from '@angular/core';
import { API } from "./apiKey";
import { Observable , of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { MessageService  } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private apiUrl = "http://api.openweathermap.org/data/2.5/"
  meteo = [];
  constructor(
    private http : HttpClient,
    private messageService : MessageService,
  ) { }

  getMeteo(ville:string): Observable<any[]>  {
    return this.http.get<any[]>(`${this.apiUrl}weather?q=${ville},fr&appid=${API.meteo}`)
        .pipe(
          catchError(this.handleError('getMeteo',[]))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.addMessage(`MeteoService: ${message}`);
  }

}
