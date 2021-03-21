import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService ) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(books => this.books = books);
  }

}
