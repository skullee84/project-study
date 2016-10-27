package com.study.app.service.impl;

import com.google.common.collect.Lists;
import com.study.app.domain.model.User;
import com.study.app.service.AppService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by dominic.lee on 2016. 10. 26..
 */
@Component
public class AppServiceImpl implements AppService, InitializingBean {

    private List<User> userList = Lists.newArrayList();

    @Override
    public void afterPropertiesSet() throws Exception {
        userList.add(new User(1001L, "dominic"));
        userList.add(new User(1002L, "max"));
        userList.add(new User(1003L, "ben"));
        userList.add(new User(1004L, "alex"));
        userList.add(new User(1005L, "scarlet"));
        userList.add(new User(1006L, "zach"));
        userList.add(new User(1007L, "john"));
    }

    @Override
    public List<User> getSampleData() {
        return this.userList;
    }

}
