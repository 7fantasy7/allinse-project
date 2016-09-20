package com.allinse.personnel.controller;

import com.allinse.personnel.entity.Calendar;
import com.allinse.personnel.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/events/save", method = RequestMethod.POST)
    public void saveEvents(@ModelAttribute(value = "data") Calendar calendar){

        System.out.println(calendar.getType());
        //calendarService.save(calendar);
    }

    @RequestMapping(value = "/event/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteEvents(@PathVariable Long id){
        calendarService.deleteById(id);
    }
}
