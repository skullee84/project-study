package com.study.app.domain.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.commons.lang3.RandomStringUtils;

import java.io.Serializable;

/**
 * Created by dominic.lee on 2016. 10. 26..
 */
@Data
@NoArgsConstructor
//@AllArgsConstructor
@ToString(of = {"name"})
public class User implements Serializable {
    private static final long serialVersionUID = -5955179159068737765L;

    private Long id;
    private String name;
    //@JsonIgnore
    private String password;

    public User(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getPassword() {
        return RandomStringUtils.randomAlphanumeric(10);
    }

}
