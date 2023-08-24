package com.hongsam.hongflix.member.repository;

import com.hongsam.hongflix.member.domain.LoginAdminResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.domain.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {

    void userSignup(Member member);

    void userSignupSubscribe(Member member);

    void adminSignup(Member member);

    String findPasswordByEmail(String password);

    LoginUserResponse findUserByEmail(String email);

    LoginAdminResponse findAdminByEmail(String email);

}
