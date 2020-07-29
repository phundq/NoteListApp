package com.nla.nlaserver.common.dto;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nla.nlaserver.common.model.BaseModel;
import com.nla.nlaserver.common.model.Label;
import com.nla.nlaserver.common.model.Note;
import com.nla.nlaserver.common.model.Role;

import lombok.Getter;
import lombok.Setter;

public class RoleDTO  extends BaseModel{

	@Getter @Setter
	private String name;

	public RoleDTO(Role role) {
		BeanUtils.copyProperties(role, this);
	}
}
