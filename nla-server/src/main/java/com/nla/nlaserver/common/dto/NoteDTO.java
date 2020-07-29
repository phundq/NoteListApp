package com.nla.nlaserver.common.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.beans.BeanUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nla.nlaserver.common.model.BaseModel;
import com.nla.nlaserver.common.model.Label;
import com.nla.nlaserver.common.model.Note;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

public class NoteDTO extends BaseModel {

	@Getter @Setter
	private String title;

	@Getter @Setter
	private String content;
	
	@Getter @Setter
	private String description;
	
	@Setter
    private Label label;

	@JsonIgnore
    private Integer folderId;
	
	@Getter
    private LabelDTO labelResponse;

	public NoteDTO(Note note) {
		BeanUtils.copyProperties(note, this);
		if(this.label != null) {
			this.labelResponse = new LabelDTO(this.label);
		}
	}
	
	
	
}
