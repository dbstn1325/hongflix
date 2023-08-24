package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class LoginAdminResponse {

    private Long memberId;

    private String email;
    private String nickName;
    private String roll;

}
