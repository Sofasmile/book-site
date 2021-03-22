import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookRequest} from "../model/book-request";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.scss']
})
export class BookCreateFormComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  createBook(form: NgForm) {
    const book = new BookRequest(
      form.value.title,
      form.value.price,
      form.value.year,
      form.value.description);
    console.log(book);
    this.bookService.createBook(book).subscribe();
    form.resetForm();
    // get info from fields
    // send request to api (spring boot)
  }
}
