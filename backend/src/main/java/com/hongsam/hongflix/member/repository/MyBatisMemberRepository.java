package com.hongsam.hongflix.member.repository;

import com.hongsam.hongflix.member.domain.LoginAdminResponse;
import com.hongsam.hongflix.member.domain.LoginUserResponse;
import com.hongsam.hongflix.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MyBatisMemberRepository implements MemberRepository{

    private final MemberMapper memberMapper;

    @Override
    public Member userSignup(Member member) {
        memberMapper.userSignup(member);
        memberMapper.userSignupSubscribe(member);

        return member;
    }

    @Override
    public Member adminSignup(Member member) {
        memberMapper.adminSignup(member);
        return member;
    }

    @Override
    public String findPasswordByEmail(String password) {
        return memberMapper.findPasswordByEmail(password);
    }

    @Override
    public LoginUserResponse findUserByEmail(String email) {
        return memberMapper.findUserByEmail(email);
    }

    @Override
    public LoginAdminResponse findAdminByEmail(String email) {
        return memberMapper.findAdminByEmail(email);
    }
}
