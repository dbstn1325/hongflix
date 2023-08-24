package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class SignupEmailDto {

    private String email;

    public SignupEmailDto() {
    }

    public SignupEmailDto(String email) {
        this.email = email;
    }
}
