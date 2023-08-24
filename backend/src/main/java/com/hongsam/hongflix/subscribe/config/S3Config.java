//package com.hongsam.hongflix.subscribe.config;
//
//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.BasicAWSCredentials;
//import com.amazonaws.services.s3.AmazonS3Client;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.autoconfigure.web.servlet.MultipartProperties;
//import org.springframework.boot.context.properties.EnableConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Profile;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.util.unit.DataSize;
//
//
//@Configuration
//@EnableConfigurationProperties(MultipartProperties.class)
//public class S3Config {
//
//    @Value("${cloud.aws.credentials.access-key}")
//    private String accessKey;
//
//    @Value("${cloud.aws.credentials.secret-key}")
//    private String secretKey;
//
//    @Value("${cloud.aws.region.static}")
//    private String region;
//
//    @Bean
//    public AmazonS3Client amazonS3Client() {
//        BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
//
//        return (AmazonS3Client) AmazonS3ClientBuilder
//                .standard()
//                .withRegion(region)
//                .withCredentials(new AWSStaticCredentialsProvider(credentials))
//                .build();
//    }
//
//    @Bean
//    public MultipartProperties multipartProperties() {
//        MultipartProperties properties = new MultipartProperties();
//        properties.setMaxFileSize(DataSize.parse("10GB"));
//        properties.setMaxRequestSize(DataSize.parse("10GB"));
//        return properties;
//    }
//}