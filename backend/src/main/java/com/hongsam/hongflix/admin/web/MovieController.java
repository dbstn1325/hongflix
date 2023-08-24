package com.hongsam.hongflix.admin.web;

import com.hongsam.hongflix.admin.domain.content.Content;

import com.hongsam.hongflix.admin.domain.content.ContentCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieCreateReqDto;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.service.movie.MovieService;

import com.hongsam.hongflix.admin.service.s3.S3UploaderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
@Slf4j
public class MovieController {

    private final MovieService movieService;

    private final S3UploaderService s3UploaderService;

    @PostMapping
    public boolean addMovie(
            @RequestPart MovieCreateReqDto movieCreateReqDto,
            MultipartFile file) throws IOException {

        String url = s3UploaderService.upload(file, "img/");

        Movie movie = new Movie(url,
                movieCreateReqDto.getTitle(),
                movieCreateReqDto.getSubTitle(),
                movieCreateReqDto.getExplanation(),
                movieCreateReqDto.getGenre()
        );

        // 이미지, 스트리밍 파일의 URL 파싱하는 과정
        String fileName = file.getOriginalFilename();
        int lastDotIndex = fileName.lastIndexOf(".");
        String realFileName = fileName.substring(0, lastDotIndex);

        String imgURL = "https://d2hpuoq6hnp8cm.cloudfront.net/output/" + realFileName
                + "img" + realFileName + ".00000000.jpg";
        log.info("imgUrl = {}", imgURL);

        movie.setAccessKey(imgURL);

        return movieService.save(movie);
    }

    public List<Movie> findMovies(){
        return movieService.findMovies();
    }

    @GetMapping("/{movieId}")
    public Optional<Movie> getMovie(@PathVariable long movieId){
        return movieService.findById(movieId);
    }



    @PostMapping(path= "/{movieId}", consumes= {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public Content addContentToMovie(
            @PathVariable Long movieId,
            @RequestPart ContentCreateReqDto contentCreateReqDto,
            MultipartFile file) throws IOException {

        s3UploaderService.upload(file, "input/");

        // 이미지, 스트리밍 파일의 URL 파싱하는 과정
        String fileName = file.getOriginalFilename();
        int lastDotIndex = fileName.lastIndexOf(".");
        String realFileName = fileName.substring(0, lastDotIndex);

        String videoURL = "https://d2hpuoq6hnp8cm.cloudfront.net/output/" + realFileName
                + "/Default/HLS/" + realFileName + ".m3u8";
        log.info("videoUrl = {}", videoURL);

        String imgURL = "https://d2hpuoq6hnp8cm.cloudfront.net/output/" + realFileName
                + "/Default/Thumbnails/" + realFileName + ".00000000.jpg";
        log.info("imgUrl = {}", imgURL);

        Content content = Content.builder()
                .title(contentCreateReqDto.getTitle())
                .accessUrl(imgURL)
                .accessStreamingUrl(videoURL)
                .explanation(contentCreateReqDto.getExplanation())
                .build();
        content.setMovieId(movieId);

        return movieService.addContentToMovie(movieId, content);
    }

    @GetMapping("/search")
    public List<Movie> searchMovies(@RequestParam String title) {
        return movieService.searchByTitle(title);
    }

    @PutMapping("/{movieId}")
    public boolean updateMovie(
            @PathVariable long movieId,
            @RequestPart MovieUpdateReqDto movieUpdateReqDto,
            MultipartFile file
    ) throws IOException {
        String url = s3UploaderService.upload(file, "img/");
        movieUpdateReqDto.setAccessKey(url);

        return movieService.update(movieId, movieUpdateReqDto, file);
    }


    @DeleteMapping("/{movieId}")
    public boolean deleteMovie(@PathVariable long movieId){
        return movieService.delete(movieId);
    }






}
