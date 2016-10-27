package com.study.app;

import com.study.app.domain.model.User;
import com.study.app.service.AppService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.inject.Inject;

import java.util.List;

import static org.junit.Assert.assertNotNull;

/**
 * Created by dominic.lee on 2016. 10. 26..
 */
@Slf4j
@ContextConfiguration(locations = "/test-service.xml")
@RunWith(SpringJUnit4ClassRunner.class)
public class AppServiceTest {

    @Inject
    private AppService appService;

    @Before
    public void setup() {
        assertNotNull(appService);
    }

    @Test
    public void test() {
        List<User> userList = appService.getSampleData();
        display(userList);
        assertNotNull(userList);
    }

    private void display(List<?> list) {
        log.debug("#############################");
        list.forEach(it -> {
            log.debug(it.toString());
        });
        log.debug("#############################");
    }

}
