package com.nla.nlaserver.common.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
import com.nla.nlaserver.common.model.NoteLabel;
import com.nla.nlaserver.common.model.NoteType;

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
	List<NoteLabel> noteLabels = new ArrayList<NoteLabel>();

	@Getter
	List<NoteLabelDTO> noteLabelsDTO = new ArrayList<NoteLabelDTO>();
	
	@Setter
	private NoteType noteType;
	
	@Getter
	private NoteTypeDTO noteTypeDTO;
	

	public NoteDTO(Note note) {
		BeanUtils.copyProperties(note, this);
		if(this.noteLabels != null && !noteLabels.isEmpty()) {
			this.noteLabelsDTO = this.noteLabels.stream().map(NoteLabelDTO::new).collect(Collectors.toList());
		}
		if(this.noteType != null) {
			this.noteTypeDTO = new NoteTypeDTO(this.noteType);
		}
	}
	
	
	
}
