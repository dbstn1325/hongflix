package com.hongsam.hongflix.admin.web;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateMapperReqDto;
import com.hongsam.hongflix.admin.domain.content.ContentUpdateReqDto;
import com.hongsam.hongflix.admin.domain.movie.Movie;
import com.hongsam.hongflix.admin.domain.movie.MovieUpdateReqDto;
import com.hongsam.hongflix.admin.service.content.ContentService;
import com.hongsam.hongflix.admin.service.s3.S3UploaderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contents")
@RequiredArgsConstructor
@Slf4j
public class ContentController {

    private final ContentService contentService;

    private final S3UploaderService s3UploaderService;

    @GetMapping("/{movieId}")
    public List<ContentCreateResDto> findAllByMovieId(@PathVariable Long movieId) {
        return contentService.findAllByMovieId(movieId);
    }

    @PutMapping("/{contentId}")
    public boolean updateMovie(
            @PathVariable Long contentId,
            @RequestPart ContentUpdateReqDto contentUpdateReqDto,
            MultipartFile file
    ) throws IOException {

        Optional<Content> savedContent = contentService.findById(contentId);

        if(savedContent.isPresent()){

            // S3에 동영상 파일 업로드하는 부분
            s3UploaderService.upload(file, "input");

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

            ContentUpdateMapperReqDto updateMapperReqDto = ContentUpdateMapperReqDto.builder()
                    .title(contentUpdateReqDto.getTitle())
                    .explanation(contentUpdateReqDto.getExplanation())
                    .accessUrl(imgURL)
                    .accessStreamingUrl(videoURL)
                    .build();

            return contentService.update(contentId, updateMapperReqDto);
        }

        return false;
    }

    @GetMapping("/search")
    public List<Content> searchMovies(@RequestParam String title) {
        return contentService.searchByTitle(title);
    }

    @DeleteMapping("/{contentId}")
    public boolean delete(@PathVariable Long contentId){
        return contentService.delete(contentId);
    }

}
