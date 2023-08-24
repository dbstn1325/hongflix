package com.hongsam.hongflix.admin.service.content;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.repository.admin.content.ContentMapper;
import com.hongsam.hongflix.admin.service.s3.S3UploaderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContentServiceImpl implements ContentService{

    private final ContentMapper contentMapper;

    private final S3UploaderService s3UploaderService;

    @Override
    public void update(Long id, MovieUpdateReqDto movieUpdateReqDto) {

    }

    @Override
    public List<ContentCreateResDto> findAllByMovieId(Long movieId) {
        return contentMapper.findAllByMovieId(movieId);
    }

    @Override
    public boolean delete(Long id) {
        return contentMapper.delete(id);
    }

    @Override
    public boolean update(Long id, ContentUpdateReqDto contentUpdateReqDto, MultipartFile file) throws IOException {
        Optional<Content> byId = findById(id);

        if(byId.isPresent()){
            String url = s3UploaderService.upload(file, "static/content-video");
            contentUpdateReqDto.setAccessUrl(url);

            contentMapper.update(id, contentUpdateReqDto);
            return true;
        }

        return false;

    }

    @Override
    public Optional<Content> findById(Long id) {
        return contentMapper.findById(id);
    }

}