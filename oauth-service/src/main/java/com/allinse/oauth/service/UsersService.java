package com.allinse.oauth.service;

import com.allinse.oauth.entity.Users;

/**
 * Created by allinse on 05.09.16.
 */
public interface UsersService {

    public Users getUserById(int id);
    public Users getUserByLogin(String login);
    public Users getAuthenticationUser();
    public Users create(Users users);
}
