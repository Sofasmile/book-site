export class BookRequest {
  title: string;
  price: number;
  year: number;
  description: string;

  constructor(title: string, price: number, year: number, description: string) {
    this.title = title;
    this.price = price;
    this.year = year;
    this.description = description;
  }
}
