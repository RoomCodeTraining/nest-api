import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  private books: any[];

  constructor() {
    this.books = [
      {
        id: 1,
        title: 'The Great Gatsby',
        pages: 180,
        author: 'F. Scott Fitzgerald',
      },
    ];
  }

  get() {
    return this.books;
  }

  create(book: any) {
    this.books.push(book);
    return {
      message: 'Le livre a été ajouté avec succès !',
      books: this.books,
    };
  }

  update(id: number, book: any) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books[index] = book;
  }
}
