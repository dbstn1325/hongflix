// package com.hongsam.hongflix.config;


// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class CorsConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**") // 모든 요청에 대해 CORS 설정 적용
//                 .allowedOrigins("윤님 ngrok", "제꺼 ngrok") // 허용할 도메인 지정
//                 .allowedMethods("GET", "POST", "PATCH", "DELETE", "HEAD", "OPTIONS") // 허용할 HTTP 메서드 지정
//                 .allowedHeaders("*"); // 허용할 헤더 지정
//     }
// }

//
