package com.allinse.oauth.service;

import com.allinse.oauth.entity.Users;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Created by allinse on 05.09.16.
 */
@Service
public class AllinseUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = new Users();
        users.setUsername("root");
        users.setPassword("acecom");
        return users;
    }
}
