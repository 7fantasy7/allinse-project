package com.allinse.personnel.repository;

import com.allinse.personnel.entity.Calendar;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by root on 13.09.2016.
 */
public interface CalendarRepository extends CrudRepository<Calendar, Long> {

    Iterable<Calendar> findAll();
}
