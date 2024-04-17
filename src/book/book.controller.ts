import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.get();
  }

  @Post()
  create(@Body() book: any) {
    return this.bookService.create(book);
  }

  @Get('/:id')
  show() {
    return this.bookService.get();
  }
}
