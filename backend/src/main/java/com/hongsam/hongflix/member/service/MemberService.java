package com.hongsam.hongflix.member.service;

import com.hongsam.hongflix.member.domain.*;
import com.hongsam.hongflix.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    // 일반 유저 회원 가입
    public MemberResponse userSignup(Member member) {
        Member signupMember = memberRepository.userSignup(member);
        if (signupMember == null) {
            return new MemberResponse(400, "회원가입 실패");
        } else {
            return new MemberResponse(200, "회원가입 성공");
        }
    }

    // 관리자 회원 가입
    public MemberResponse adminSignup(Member member) {
        Member signupMember = memberRepository.adminSignup(member);
        if (signupMember == null) {
            return new MemberResponse(400, "회원가입 실패");
        } else {
            return new MemberResponse(200, "회원가입 성공");
        }
    }

    // 일반 유저 로그인
    public LoginUserResponse userLogin(LoginDto loginDto) {
        // 이메일에대한 회원 정보가 없을 때 (존재하지 않는 회원)
        if (memberRepository.findUserByEmail(loginDto.getEmail()) == null) {
            return null;
        }
        // 비밀번호가 틀릴 때
        if (memberRepository.findPasswordByEmail(loginDto.getEmail()).equals(loginDto.getPassword())) {
            return memberRepository.findUserByEmail(loginDto.getEmail());
        } else {
            return null;
        }
    }

    // 관리자 로그인
    public LoginAdminResponse adminLogin(LoginDto loginDto) {
        // 이메일에대한 회원 정보가 없을 때
        if (memberRepository.findAdminByEmail(loginDto.getEmail()) == null) {
            return null;
        }
        // 비밀번호가 틀릴 때
        if (memberRepository.findPasswordByEmail(loginDto.getEmail()).equals(loginDto.getPassword())) {
            return memberRepository.findAdminByEmail(loginDto.getEmail());
        } else {
            return null;
        }
    }

    public MemberResponse emailCheck(String email) {

        LoginAdminResponse member = memberRepository.findAdminByEmail(email);

        if (member == null) {
            return new MemberResponse(200, "사용 가능한 이메일 입니다.");
        } else {
            return new MemberResponse(400, "이미 사용중이 이메일 입니다.");
        }

    }
}
