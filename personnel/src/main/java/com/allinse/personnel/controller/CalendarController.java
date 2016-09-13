package com.allinse.personnel.controller;

import com.allinse.personnel.entity.Calendar;
import com.allinse.personnel.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by root on 13.09.2016.
 */
@RestController
@RequestMapping("/calendar")
public class CalendarController {

    @Autowired
    private CalendarService calendarService;

    @RequestMapping(value = "/events", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Calendar> getFullEvents(){
        return calendarService.findAll();
    }

    @RequestMapping(value = "/events/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void saveEvents(Calendar calendar){
        calendarService.save(calendar);
    }

    @RequestMapping(value = "/event/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteEvents(@PathVariable Integer id){
        calendarService.deleteById(id);
    }
}
