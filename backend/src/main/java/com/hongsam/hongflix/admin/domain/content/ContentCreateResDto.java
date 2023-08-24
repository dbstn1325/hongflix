package com.hongsam.hongflix.admin.domain.content;

import lombok.Data;

@Data
public class ContentCreateResDto {

    private Long id;
    private Long movieId;

    private String title;
    private String explanation;
    private String movieName;
    private String accessUrl;
    private String accessStreamingUrl;



    public ContentCreateResDto(Long id, Long movieId, String title, String explanation, String movieName, String accessUrl, String accessStreamingUrl) {
        this.id = id;
        this.movieId = movieId;
        this.title = title;
        this.explanation = explanation;
        this.movieName = movieName;
        this.accessUrl = accessUrl;
        this.accessStreamingUrl = accessStreamingUrl;
    }
}
