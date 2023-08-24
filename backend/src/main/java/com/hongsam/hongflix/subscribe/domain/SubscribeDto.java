package com.hongsam.hongflix.subscribe.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SubscribeDto {

    private long id;

    private int available;

    private int period;

    public SubscribeDto() {
    }
}
