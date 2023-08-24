package com.hongsam.hongflix.subscribe.repository;

import com.hongsam.hongflix.subscribe.domain.SubscribeDto;
import com.hongsam.hongflix.subscribe.domain.SubscribeUpdateDto;

import java.util.Optional;

public interface SubscribeRepository {

    SubscribeDto save(SubscribeDto subscribeDto);

    void update(Long id, SubscribeUpdateDto updateDto);

    Optional<SubscribeDto> findById(Long id);
}
