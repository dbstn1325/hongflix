package com.hongsam.hongflix.admin.domain.content;

import lombok.Builder;
import lombok.Data;

@Data
public class ContentUpdateMapperReqDto {
    private String title;
    private String explanation;
    private String videoName;
    private String accessUrl;
    private String accessStreamingUrl;

    @Builder
    public ContentUpdateMapperReqDto(String title, String explanation, String videoName, String accessUrl, String accessStreamingUrl) {
        this.title = title;
        this.explanation = explanation;
        this.videoName = videoName;
        this.accessUrl = accessUrl;
        this.accessStreamingUrl = accessStreamingUrl;
    }
}
