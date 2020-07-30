package com.nla.nlaserver.common.dto;

import org.springframework.beans.BeanUtils;

import com.nla.nlaserver.common.model.BaseModel;
import com.nla.nlaserver.common.model.Label;
import com.nla.nlaserver.common.model.Note;
import com.nla.nlaserver.common.model.NoteLabel;

import lombok.Getter;
import lombok.Setter;

public class NoteLabelDTO extends BaseModel{	

	@Getter @Setter
	private Integer noteId;
	
	@Setter
	private Label label;
	
	@Setter 
	private Note note;
	
	
	@Getter
	private String labelName;
	
	@Getter 
	private String noteTitle;
	
	@Getter @Setter
	private Integer labelId;

	public NoteLabelDTO(NoteLabel noteLabel) {
		BeanUtils.copyProperties(noteLabel, this);
		if(this.note != null) {
			this.noteTitle = this.note.getTitle();
		}
		if(this.label != null) {
			this.labelName = this.label.getName();
		}
	}
	
	
}
