import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private rootUrl = 'http://localhost:8081';
  private itemsUrl = `${this.rootUrl}/list.json`;
  private functionUrl = 'http://localhost:7071/api/AddItem';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
    .pipe(
      tap(_ => console.log('fetched items')),
      catchError(this.handleError<Item[]>('getItems', []))
    )
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    }
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.rootUrl}/${id}.json`;

    return this.http.get<Item>(url).pipe(
      tap(_ => console.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.functionUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => console.log(`added item w/ id=${newItem.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }
}
