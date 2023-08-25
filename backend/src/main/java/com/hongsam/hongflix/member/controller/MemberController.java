package com.hongsam.hongflix.member.controller;

import com.hongsam.hongflix.member.domain.*;
import com.hongsam.hongflix.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    // 일반 유저 회원 가입
    @PostMapping("/signup")
    public MemberResponse userSignup(@RequestBody Member member) {
        return memberService.userSignup(member);
    }

    // 관리자 회원 가입
    @PostMapping("/admin/signup")
    public MemberResponse adminSignup(@RequestBody Member member) {
        return memberService.adminSignup(member);
    }

    // 회원가입 이메일 중복 체크
    @PostMapping("/signup/email-check")
    public MemberResponse emailCheck(@RequestBody SignupEmailDto signupEmailDto) {
        return memberService.emailCheck(signupEmailDto.getEmail());
    }

    // 일반 유저 로그인
    @PostMapping("/login")
    public MemberResponse userLogin(@RequestBody LoginDto loginDto, HttpServletRequest request) {
        LoginUserResponse loginMember = memberService.userLogin(loginDto);

        if (loginMember == null) {
            return new MemberResponse(400, "아이디 또는 비밀번호가 맞지 않습니다.");
        }

        HttpSession session = request.getSession();
        session.setAttribute("loginMember", loginMember);
        log.info("일반 유저 세션 생성");

//        session.getAttributeNames().asIterator()
//                .forEachRemaining(name -> log.info("session name={}, value={}", name, session.getAttribute(name)));
//        log.info("sessionId={}", session.getId());
//        LoginUserResponse test = (LoginUserResponse) session.getAttribute("loginMember");
//        log.info("memberId={}",test.getRoll());

        return new MemberResponse(200, loginMember);
    }

    // 관리자 로그인
    @PostMapping("/admin/login")
    public MemberResponse adminLogin(@RequestBody LoginDto loginDto, HttpServletRequest request) {
        LoginAdminResponse loginMember = memberService.adminLogin(loginDto);

        if (loginMember == null) {
            return new MemberResponse(400, "아이디 또는 비밀번호가 맞지 않습니다.");
        }

        HttpSession session = request.getSession();
        session.setAttribute("loginMember", loginMember);
        log.info("관리자 세션 생성");

        return new MemberResponse(200, loginMember);
    }

    //로그아웃
    @PostMapping("/logout")
    public MemberResponse logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session == null || session.getAttribute("loginMember") == null) {
            return new MemberResponse(400,"로그아웃 실패");
        }
        session.invalidate();
        return new MemberResponse(200,"로그아웃 성공");
    }
}
