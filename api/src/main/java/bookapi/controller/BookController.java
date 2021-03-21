package bookapi.controller;

import java.util.List;
import java.util.stream.Collectors;
import bookapi.dto.BookRequestDto;
import bookapi.dto.BookResponseDto;
import bookapi.mapper.BookMapper;
import bookapi.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/book")
public class BookController {
  @Autowired
  private BookService bookService;
  @Autowired
  private BookMapper bookMapper;

  @GetMapping
  public ResponseEntity<List<BookResponseDto>> getAllBook() {
    return ResponseEntity.ok(bookService.getAll().stream()
        .map(value -> bookMapper.createResponseDto(value))
        .collect(Collectors.toList()));
  }

  @GetMapping("{bookId}")
  public BookResponseDto getBookById(@PathVariable Long bookId) {
    return bookMapper.createResponseDto(bookService.getById(bookId).orElseThrow());
  }

  @GetMapping("/data")
  public List<BookResponseDto> getBookByTitle(@RequestParam String title) {
    return bookService.getByTitle(title).stream()
        .map(value -> bookMapper.createResponseDto(value))
        .collect(Collectors.toList());
  }

  @PostMapping
  public ResponseEntity createBook(@RequestBody BookRequestDto bookRequest) {
    bookService.create(bookMapper.createModel(bookRequest));
    return ResponseEntity.ok().build();
  }
}
