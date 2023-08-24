package com.hongsam.hongflix.member.repository;

import com.hongsam.hongflix.member.domain.LoginAdminResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.domain.Member;

public interface MemberRepository {

    Member userSignup(Member member);

    Member adminSignup(Member member);

    String findPasswordByEmail(String password);

    LoginUserResponse findUserByEmail(String email);

    LoginAdminResponse findAdminByEmail(String email);



}
