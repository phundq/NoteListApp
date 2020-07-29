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
@Table(name = "note")
public class Note extends BaseModel {
	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "content")
	private String content;

	@OneToMany(mappedBy = "note")
	List<NoteLabel> noteLabels = new ArrayList<NoteLabel>();

	@NotFound(action = NotFoundAction.IGNORE)
	@ManyToOne
	@JoinColumn(name = "note_type_id", updatable = false, insertable = false)
	private NoteType noteType;

	@Column(name = "note_type_id")
	private Integer noteTypeId;
}
