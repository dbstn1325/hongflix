package com.hongsam.hongflix.subscribe.controller;


import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.subscribe.domain.SubscribeDto;
import com.hongsam.hongflix.subscribe.domain.SubscribeUpdateDto;
import com.hongsam.hongflix.subscribe.service.SubscribeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subscribe")
@RequiredArgsConstructor
@Slf4j
public class SubscribeController {

    private final SubscribeService subscribeService;

    @GetMapping("/{memberId}")
    public String save(@PathVariable Long memberId) {
        SubscribeDto saveDto = new SubscribeDto();
        saveDto.setId(memberId);
        saveDto.setAvailable(0);
        saveDto.setPeriod(0);
        // 서비스단 호출
        subscribeService.save(saveDto);
        return "OK";
    }

    @PostMapping
    public String update(@SessionAttribute(value = "loginMember", required = false) LoginUserResponse loginUserResponse, @RequestBody SubscribeUpdateDto updateDto) {
        if(loginUserResponse == null) {
            log.info("세션이 비워져있습니다.");
        } else {
            log.info("세션은 문제 없습니다.");
        }
        subscribeService.update(loginUserResponse.getMemberId(), updateDto);
        loginUserResponse.setAvailable(updateDto.getAvailable());
        loginUserResponse.setPeriod(updateDto.getPeriod());

        return "OK";
    }
}
