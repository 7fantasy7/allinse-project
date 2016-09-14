package com.allinse.personnel.service;

import com.allinse.personnel.entity.Calendar;

/**
 * Created by root on 13.09.2016.
 */
public interface CalendarService {

    public Iterable<Calendar> findAll();

    public void deleteById(Long id);

    public void save(Calendar calendar);
}
