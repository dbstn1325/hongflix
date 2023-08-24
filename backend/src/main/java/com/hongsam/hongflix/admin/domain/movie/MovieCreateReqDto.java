package com.hongsam.hongflix.admin.domain.movie;

import lombok.Data;

@Data
public class MovieCreateReqDto {
    private String title;
    private String subTitle;
    private String explanation;
    private String genre;
}
