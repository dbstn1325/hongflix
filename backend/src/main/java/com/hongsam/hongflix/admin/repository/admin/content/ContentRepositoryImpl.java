package com.hongsam.hongflix.admin.repository.admin.content;

import com.hongsam.hongflix.admin.domain.content.Content;
import com.hongsam.hongflix.admin.domain.content.ContentCreateResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@RequiredArgsConstructor
public class ContentRepositoryImpl implements ContentRepository{
    private final ContentMapper contentMapper;

    @Override
    public Content save(Content content) {
        contentMapper.save(content);
        return content;
    }

    @Override
    public List<ContentCreateResDto> findAllByMovieId(Long movieId) {
        return contentMapper.findAllByMovieId(movieId);
    }

    @Override
    public List<Content> searchByTitle(String title) {
        return contentMapper.findByTitle(title);
    }


//    @Override
//    public void update(Long id, ContentUpdateReqDto contentUpdateReqDto) {
//
//    }

//    @Override
//    public Optional<Content> findById(Long id) {
//        return Optional.empty();
//    }
//



}
