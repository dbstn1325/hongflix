package com.hongsam.hongflix.member;

import lombok.Getter;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;


@Getter
@Configuration
public class AWSConfig {

    @Value("${aws.sns.accessKey}")
    private String awsAccessKey;

    @Value("${aws.sns.secretKey}")
    private String awsSecretKey;

    private String awsRegion = "ap-northeast-1";
}
