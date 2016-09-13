package com.allinse.personnel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
/**
 * Created by root on 13.09.2016.
 */
@SpringBootApplication
@EnableDiscoveryClient
public class PersonnelApplication {
    public static void main(String[] args) {
        SpringApplication.run(PersonnelApplication.class, args);
    }
}
