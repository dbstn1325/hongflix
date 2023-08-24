package com.hongsam.hongflix.admin.domain.content;

import lombok.Data;

@Data
public class ContentUpdateReqDto {
    private String title;
    private String explanation;

    public ContentUpdateReqDto(String title, String explanation) {
        this.title = title;
        this.explanation = explanation;
    }
}
