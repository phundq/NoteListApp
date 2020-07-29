package com.nla.nlaserver.common.dto;

import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nla.nlaserver.common.model.BaseModel;
import com.nla.nlaserver.common.model.Label;
import com.nla.nlaserver.common.model.Note;
import com.nla.nlaserver.common.model.User;

import lombok.Getter;
import lombok.Setter;

public class LabelDTO extends BaseModel {
	@Getter @Setter
	private String name;

	@Setter
    private User user ;

	@JsonIgnore
    private Integer userId;

	public LabelDTO(Label label) {
		BeanUtils.copyProperties(label, this);
	}
}
