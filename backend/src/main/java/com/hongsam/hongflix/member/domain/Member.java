package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class Member {

    private Long memberId;

    private String email;
    private String password;
    private String nickName;
    private String phoneNumber;

    public Member() {
    }

    public Member(Long memberId, String email, String password, String nickName, String phoneNumber) {
        this.memberId = memberId;
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.phoneNumber = phoneNumber;
    }
}
