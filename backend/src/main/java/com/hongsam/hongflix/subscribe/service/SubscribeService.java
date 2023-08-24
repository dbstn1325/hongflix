package com.hongsam.hongflix.subscribe.service;

import com.hongsam.hongflix.subscribe.domain.SubscribeDto;
import com.hongsam.hongflix.subscribe.domain.SubscribeUpdateDto;
import com.hongsam.hongflix.subscribe.repository.SubscribeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubscribeService {
    private final SubscribeRepository repository;

    public void save(SubscribeDto subscribeDto) {
        repository.save(subscribeDto);
    }

    public void update(Long id, SubscribeUpdateDto updateDto) {
        repository.update(id, updateDto);
    }

}
