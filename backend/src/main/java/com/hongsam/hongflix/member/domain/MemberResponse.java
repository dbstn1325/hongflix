package com.hongsam.hongflix.member.domain;

import lombok.Data;

@Data
public class MemberResponse {

    private int status;
    private Object data;

    public MemberResponse() {
    }

    public MemberResponse(int status, Object data) {
        this.status = status;
        this.data = data;
    }
}
