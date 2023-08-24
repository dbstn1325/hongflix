package com.hongsam.hongflix.admin.service.movie;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.repository.admin.content.ContentRepository;
import com.hongsam.hongflix.admin.repository.admin.movie.MovieRepository;
import com.hongsam.hongflix.admin.service.s3.S3UploaderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MovieServiceImpl implements MovieService{

    private final MovieRepository movieRepository;

    private final ContentRepository contentRepository;



    @Override
    public boolean save(Movie movie) throws IOException {
        Movie savedMovie = movieRepository.save(movie);
        if(savedMovie.getId() != null){
            return true;
        }

        return false;
    }

    @Override
    @Transactional
    public Content addContentToMovie(Long movieId, Content content) throws IOException {
        return contentRepository.save(content);
    }


    @Override
    public boolean update(Long id, MovieUpdateReqDto movieUpdateReqDto, MultipartFile file) throws IOException {
        Optional<Movie> byId = findById(id);
        if(byId.isPresent()){
            movieRepository.update(id, movieUpdateReqDto);
            return true;
        }

        return false;
    }

    @Override
    public boolean delete(Long id) {
        return movieRepository.delete(id);
    }

    @Override
    public List<Movie> searchByTitle(String title) {
        return movieRepository.searchByTitle(title);
    }

    @Override
    public Optional<Movie> findById(Long id) {
        return movieRepository.findById(id);
    }


    @Override
    public List<Movie> findMovies() {
        return movieRepository.findAll();
    }

    @Override
    public List<Movie> getMoviesByTwoGenres(String genre1, String genre2) {
        return movieRepository.getMoviesByTwoGenres(genre1, genre2);
    }
}
