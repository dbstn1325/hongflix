package com.hongsam.hongflix.admin.domain.movie;

import lombok.Data;

@Data
public class MovieUpdateReqDto {
    private String title;
    private String subTitle;
    private String explanation;
    private String genre;
    private String accessKey;

    public MovieUpdateReqDto(String title, String subTitle, String explanation, String genre) {
        this.title = title;
        this.subTitle = subTitle;
        this.explanation = explanation;
        this.genre = genre;
    }
}
