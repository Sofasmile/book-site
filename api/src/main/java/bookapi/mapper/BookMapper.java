package bookapi.mapper;

import bookapi.dto.BookRequestDto;
import bookapi.dto.BookResponseDto;
import bookapi.model.Book;
import org.springframework.stereotype.Component;

@Component
public class BookMapper {
  public BookResponseDto createResponseDto(Book book) {
    return new BookResponseDto()
        .setId(book.getId())
        .setPrice(book.getPrice())
        .setTitle(book.getTitle())
        .setDescription(book.getDescription())
        .setYear(book.getYear());
  }

  public Book createModel(BookRequestDto bookResponseDto) {
    return new Book()
        .setTitle(bookResponseDto.getTitle())
        .setPrice(bookResponseDto.getPrice())
        .setDescription(bookResponseDto.getDescription())
        .setYear(bookResponseDto.getYear());
  }
}
