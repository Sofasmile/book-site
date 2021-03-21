import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {BookRequest} from "../model/book-request";

@Injectable({
    providedIn: 'root'
  }
)
export class BookService {
  private baseUrl = 'http://localhost:8080';
  private bookUrl = '/book';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + this.bookUrl);
  }

  createBook(book: BookRequest): Observable<void> {
    return this.http.post<void>(this.baseUrl + this.bookUrl, book);
  }
}
