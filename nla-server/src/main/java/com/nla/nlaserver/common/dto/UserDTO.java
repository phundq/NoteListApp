package com.nla.nlaserver.common.dto;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nla.nlaserver.common.model.BaseModel;
import com.nla.nlaserver.common.model.Label;
import com.nla.nlaserver.common.model.Note;
import com.nla.nlaserver.common.model.Role;
import com.nla.nlaserver.common.model.User;

import lombok.Getter;
import lombok.Setter;

public class UserDTO extends BaseModel {
	@Getter @Setter
	private String username;

	@Getter @Setter
	private String password;
	
	@Setter
    private Role role;

	@JsonIgnore
    private Integer roleId;

	@Getter
	private RoleDTO userRole;
	
	public UserDTO(User user ) {
		BeanUtils.copyProperties(user, this);
		if(this.role != null) {
			this.userRole = new RoleDTO(this.role);
		}
	}
}
