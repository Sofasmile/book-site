package bookapi.dto;

import lombok.Data;

@Data
public class BookRequestDto {
  private String title;
  private int price;
  private int year;
  private String description;
}
