package com.server.soogohaesseo.domain;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "user")
@EqualsAndHashCode(of = "userId", callSuper = false)
@ToString
public class User {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(columnDefinition = "varchar(45) COMMENT '유저이름'")
    private String userName;

    @Column(columnDefinition = "varchar(45) COMMENT '이메일'")
    private String email;

    @Column(columnDefinition = "varchar(255) COMMENT '비밀번호'")
    private String password;

    @Lob
    @Column(columnDefinition = "longtext COMMENT '자기소개'")
    private String introduction;
}