package com.hongsam.hongflix.admin.repository.admin.movie;

import com.hongsam.hongflix.admin.domain.movie.MovieTwoGenreReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MovieMapper {

    void save(Movie movie);

    Integer update(@Param("id") Long id, @Param("updateParam") MovieUpdateReqDto movieUpdateReqDto);

    Optional<Movie> findById(Long id);

    List<Movie> findAll();

    boolean delete(Long id);

    List<Movie> findByTitle(String title);

    List<Movie> findByTwoGenres(MovieTwoGenreReqDto movieGenreReqDto);

}
