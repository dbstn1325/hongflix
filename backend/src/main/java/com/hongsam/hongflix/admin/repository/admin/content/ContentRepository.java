package com.hongsam.hongflix.admin.repository.admin.content;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;

import java.util.List;

public interface ContentRepository {
    Content save(Content content);

    List<ContentCreateResDto> findAllByMovieId(Long movieId);

    List<Content> searchByTitle(String title);
}
