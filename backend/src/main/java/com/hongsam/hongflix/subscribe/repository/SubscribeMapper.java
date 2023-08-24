package com.hongsam.hongflix.subscribe.repository;

import com.hongsam.hongflix.subscribe.domain.SubscribeDto;
import com.hongsam.hongflix.subscribe.domain.SubscribeUpdateDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Optional;

@Mapper
public interface SubscribeMapper {

    void save(SubscribeDto subscribeDto);

    void update(@Param("id") Long id, @Param("updateDto") SubscribeUpdateDto updateDto);

    Optional<SubscribeDto> findById(Long id);

}
