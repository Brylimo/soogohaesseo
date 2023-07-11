package com.server.soogohaesseo.domain;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "todo")
@EqualsAndHashCode(of = "todoId", callSuper = false)
@ToString
public class Todo {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int todoId;

    @Column(columnDefinition = "varchar(255) COMMENT '이름'")
    private String name;

    @ManyToOne
    @JoinColumn(name="dayId")
    private Day day;
}
