package com.allinse.oauth.controller;

import com.allinse.oauth.entity.Users;
import com.allinse.oauth.entity.View;
import com.allinse.oauth.service.UsersService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by allinse on 05.09.16.
 */
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @JsonView(View.UI.class)
    @RequestMapping(value = "/current", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Users getUser(Principal principal) {

        return usersService.getUserByLogin(principal.getName());
    }
}

   /* //@PreAuthorize("#oauth2.hasScope('server')")
    @RequestMapping(method = RequestMethod.POST)
    public void createUser(@Valid @RequestBody Users users) {
        usersService.create(users);
    }
}
*/