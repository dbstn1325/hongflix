package com.hongsam.hongflix.admin.repository.admin.content;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateMapperReqDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ContentMapper {

    void save(Content content);

    List<ContentCreateResDto> findAllByMovieId(Long movieId);

    boolean delete(Long id);

    Optional<Content> findById(Long id);

    boolean update(@Param("id") Long id, @Param("updateParam") ContentUpdateMapperReqDto updateMapperReqDto);

    List<Content> findByTitle(String title);

}
