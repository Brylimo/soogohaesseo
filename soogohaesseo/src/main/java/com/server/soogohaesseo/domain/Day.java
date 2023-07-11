package com.server.soogohaesseo.domain;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@Entity
@Table(name="day")
@EqualsAndHashCode(of = "dayId", callSuper = false)
@ToString
public class Day {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dayId;

    @Column(columnDefinition = "date COMMENT '날짜'")
    private Date date;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;
}
