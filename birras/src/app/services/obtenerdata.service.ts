import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ObtenerdataService {
  SaveLocalStorageItem(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
// tslint:disable-next-line: member-ordering
  data: any;
  // tslint:disable-next-line: member-ordering
  environment = { url : 'http://192.168.43.224:3000/birras'};
// tslint:disable-next-line: member-ordering
  urlReserva = `${environment.url}/reserva`;
  // tslint:disable-next-line: member-ordering
  urlDecorado = `${environment.url}/decorado`;
  // tslint:disable-next-line: member-ordering
  urlAdicionales = `${environment.url}/adicionales`;
// tslint:disable-next-line: member-ordering
urlBares = `${environment.url}/bares`;


  constructor(public http: HttpClient) { }

  public obtenerData(formulario: any) {
    this.data = formulario;
    console.log('data');
  }

  public enviarData() {
    return this.data;
  }

 
  // Reserva
  getReserva(): Observable<any[]> {

    return this.http.get<any[]>(this.urlReserva).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  setReserva(data: any) {
    return this.http.post(this.urlReserva, data);
  }

  getBirrasReserva(id: string) {
     return this.http.get(`${this.urlReserva}/${id}`);
   }

  putReserva(data: any) {
    console.log(data);
    return this.http.put(this.urlReserva, data);
  }

  deleteReserva(id: string) {
    console.log(`${this.urlReserva}/${id}`);
    return this.http.delete(`${this.urlReserva}/${id}`);
  }

  


// Decorado

getDecorado(): Observable<any[]> {

  return this.http.get<any[]>(this.urlDecorado).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setDecorado(data: any) {
  return this.http.post(this.urlDecorado, data);
}

getBirrasDecorado(id: string) {
   return this.http.get(`${this.urlDecorado}/${id}`);
 }

putDecorado(data: any) {
  console.log(data);
  return this.http.put(this.urlDecorado, data);
}

deleteDecorado(id: string) {
  console.log(`${this.urlDecorado}/${id}`);
  return this.http.delete(`${this.urlDecorado}/${id}`);
}



// Adicionales

getAdicionales(): Observable<any[]> {

  return this.http.get<any[]>(this.urlAdicionales).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setAdicionales(data: any) {
  return this.http.post(this.urlAdicionales, data);
}

getBirrasAdicionales(id: string) {
   return this.http.get(`${this.urlAdicionales}/${id}`);
 }

putAdicionales(data: any) {
  console.log(data);
  return this.http.put(this.urlAdicionales, data);
}

deleteAdicionales(id: string) {
  console.log(`${this.urlAdicionales}/${id}`);
  return this.http.delete(`${this.urlAdicionales}/${id}`);
}

// Bares
getBares(): Observable<any[]> {

  return this.http.get<any[]>(this.urlBares).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

setBares(data: any) {
  return this.http.post(this.urlBares, data);
}

getBirrasBares(id: string) {
   return this.http.get(`${this.urlBares}/${id}`);
 }

putBares(data: any) {
  console.log(data);
  return this.http.put(this.urlBares, data);
}

deleteBares(id: string) {
  console.log(`${this.urlBares}/${id}`);
  return this.http.delete(`${this.urlBares}/${id}`);
}


private handleError(err: HttpErrorResponse) {
let errorMessage = '';
if (err.error instanceof ErrorEvent) {
  errorMessage = `An error ocurred ${err.error.message}`;
} else {
  errorMessage = `Server returned code: ${err.status}, error message is:   ${err.message}`;
  // tslint:disable-next-line:align
} console.log(errorMessage);
return throwError(errorMessage);
}

}



