package com.nla.nlaserver.common.dto;

import org.springframework.beans.BeanUtils;

import com.nla.nlaserver.common.model.BaseModel;
import com.nla.nlaserver.common.model.NoteType;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

public class NoteTypeDTO extends BaseModel{
	
	@Getter @Setter
	private String name;

	public NoteTypeDTO(NoteType noteType) {
	 BeanUtils.copyProperties(noteType, this);
	}
	
	
}
