package com.nla.nlaserver.common.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "note_type")
public class NoteType extends BaseModel{
	
	@Column(name = "name")
	private String name;
	
	@OneToMany(mappedBy = "noteType")
	List<Note> notes= new ArrayList<Note>();

}
