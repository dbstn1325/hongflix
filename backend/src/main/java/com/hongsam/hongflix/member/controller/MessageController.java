package com.hongsam.hongflix.member.controller;

import com.hongsam.hongflix.member.domain.MemberResponse;
import com.hongsam.hongflix.member.domain.SendPhoneNumberDto;
import com.hongsam.hongflix.member.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import software.amazon.awssdk.services.sns.SnsClient;
import software.amazon.awssdk.services.sns.model.PublishRequest;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MessageController {

    private final MessageService messageService;

    @PostMapping ("/signup/message")
    public MemberResponse sendMessage(@RequestBody SendPhoneNumberDto sendPhoneNumberDto) {

        Random rand  = new Random();
        String numStr = "";
        for(int i=0; i<4; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr += ran;
        }

        String message = "본인확인 인증번호 [" + numStr + "]를 입력해주세요.";

        SnsClient snsClient = messageService.getSnsClient();

        PublishRequest request = PublishRequest.builder()
                .message(message)
                .phoneNumber(sendPhoneNumberDto.getPhoneNumber())
                .build();

        snsClient.publish(request);

        return new MemberResponse(200,numStr);
    }

}
