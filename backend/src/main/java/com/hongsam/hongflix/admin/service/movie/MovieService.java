package com.hongsam.hongflix.admin.service.movie;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface MovieService {

    boolean save(Movie movie) throws IOException;

    Content addContentToMovie(Long movieId, Content content) throws IOException;

    boolean update(Long id, MovieUpdateReqDto movieUpdateReqDto, MultipartFile file) throws IOException;

    boolean delete(Long id);

    List<Movie> searchByTitle(String title);

    Optional<Movie> findById(Long id);

    List<Movie> findMovies();
}
