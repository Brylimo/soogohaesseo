package com.server.soogohaesseo.repository;

import com.server.soogohaesseo.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUserId(Integer userId);
}
