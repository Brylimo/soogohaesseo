package com.server.soogohaesseo.repository;

import com.server.soogohaesseo.domain.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Integer> {
    Todo findByTodoId(Integer todoId);
}
