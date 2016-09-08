package com.allinse.oauth.repository;

import com.allinse.oauth.entity.Roles;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by allinse on 05.09.16.
 */

public interface RolesRepository extends CrudRepository<Roles, Long> {
    Roles findByRole(String role);
}
