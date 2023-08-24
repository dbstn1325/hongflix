package com.hongsam.hongflix.config;

import com.amazonaws.services.s3.AmazonS3Client;
import com.hongsam.hongflix.admin.repository.admin.movie.MovieMapper;
import com.hongsam.hongflix.admin.repository.admin.movie.MovieRepository;
import com.hongsam.hongflix.admin.repository.admin.movie.MovieRepositoryImpl;
import com.hongsam.hongflix.admin.repository.admin.content.ContentMapper;
import com.hongsam.hongflix.admin.repository.admin.content.ContentRepository;
import com.hongsam.hongflix.admin.repository.admin.content.ContentRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class MyBatisConfig {

    private final MovieMapper movieMapper;
    private final ContentMapper contentMapper;
    private final AmazonS3Client amazonS3Client;


    @Bean
    public MovieRepository movieRepository() {
        return new MovieRepositoryImpl(movieMapper);
    }

    @Bean
    public ContentRepository contentRepository() {
        return new ContentRepositoryImpl(contentMapper);
    }


}

