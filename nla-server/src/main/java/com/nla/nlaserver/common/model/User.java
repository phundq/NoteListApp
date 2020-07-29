package com.nla.nlaserver.common.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import lombok.Data;


@Data
@Entity
@Table(name = "user")
public class User extends BaseModel {

	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne
	@JoinColumn(name = "role_id", updatable = false, insertable = false)
	private Role role;

	@Column(name = "role_id")
	private Integer roleId;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "user")
	List<Label> labels = new ArrayList<Label>();
}
