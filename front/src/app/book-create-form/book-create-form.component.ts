import { Component, OnInit } from '@angular/core';
import { BookService } from "../service/book.service";
import { NgForm } from "@angular/forms";
import { BookRequest } from "../model/book-request";

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.scss']
})
export class BookCreateFormComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  createBook(form: NgForm): void {
    const book = new BookRequest(
      form.value.title,
      form.value.price,
      form.value.year,
      form.value. description
    );
    this.bookService.createBook(book).subscribe();
    form.resetForm();
  }
}
