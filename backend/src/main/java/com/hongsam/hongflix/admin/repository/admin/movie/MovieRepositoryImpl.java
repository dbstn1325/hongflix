package com.hongsam.hongflix.admin.repository.admin.movie;

import com.hongsam.hongflix.admin.domain.movie.MovieTwoGenreReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MovieRepositoryImpl implements MovieRepository{

    private final MovieMapper movieMapper;

    @Override
    public Movie save(Movie movie) {
        movieMapper.save(movie);
        return movie;
    }

    @Override
    public Integer update(Long movieId, MovieUpdateReqDto movieUpdateReqDto) {
        return movieMapper.update(movieId, movieUpdateReqDto);
    }

    @Override
    public boolean delete(Long id) {
        return movieMapper.delete(id);
    }

    @Override
    public List<Movie> searchByTitle(String title) {
        return movieMapper.findByTitle(title);
    }

    @Override
    public Optional<Movie> findById(Long movieId) {
        return movieMapper.findById(movieId);
    }

    @Override
    public List<Movie> findAll() {
        return movieMapper.findAll();
    }

    @Override
    public List<Movie> getMoviesByTwoGenres(String genre1, String genre2) {
        MovieTwoGenreReqDto dto = new MovieTwoGenreReqDto();
        dto.setGenre_first_name(genre1);
        dto.setGenre_second_name(genre2);
        return movieMapper.findByTwoGenres(dto);
    }

}
