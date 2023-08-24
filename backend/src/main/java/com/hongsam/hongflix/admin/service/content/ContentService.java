package com.hongsam.hongflix.admin.service.content;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateMapperReqDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ContentService {

    List<ContentCreateResDto> findAllByMovieId(Long movieId);

    List<Content> searchByTitle(String title);

    boolean delete(Long id);

    boolean update(Long id, ContentUpdateMapperReqDto updateMapperReqDto) throws IOException;

    Optional<Content> findById(Long id);
}
