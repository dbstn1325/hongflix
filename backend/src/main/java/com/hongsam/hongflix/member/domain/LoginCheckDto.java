package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class LoginCheckDto {

    private int loginResult;

    private LoginUserResponse loginUserResponse;

    private LoginAdminResponse loginAdminResponse;

    public LoginCheckDto() {
    }

    public LoginCheckDto(int loginResult, LoginUserResponse loginUserResponse, LoginAdminResponse loginAdminResponse) {
        this.loginResult = loginResult;
        this.loginUserResponse = loginUserResponse;
        this.loginAdminResponse = loginAdminResponse;
    }
}
