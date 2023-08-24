package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class LoginUserResponse {

    private Long memberId;

    private String email;
    private String nickName;
    private String roll;

    private int available;
    private String period;

}
