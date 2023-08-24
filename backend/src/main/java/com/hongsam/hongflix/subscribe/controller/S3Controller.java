package com.hongsam.hongflix.subscribe.controller;

import com.hongsam.hongflix.subscribe.service.S3Service;
import com.hongsam.hongflix.subscribe.service.SubscribeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@Slf4j
public class S3Controller {

    private final S3Service s3Service;

    @PostMapping("/s3/upload")
    public String upload(MultipartFile file) throws IOException {

        // S3에 동영상 파일 업로드하는 부분
        String url = s3Service.saveFile(file);
        log.info("생성된 url = {}", url);


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


        // 이미지, 스트리밍파일 경로 DB에 저장하는 로직 작성



        return "OK";
    }

}
