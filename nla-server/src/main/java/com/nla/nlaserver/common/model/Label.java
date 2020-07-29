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

@Entity
@Table(name = "label")
public class Label extends BaseModel {
	
	@Column(name = "name")
	private String name;
	
	@OneToMany(mappedBy = "label")
	List<NoteLabel> noteLabels = new ArrayList<NoteLabel>();
	
	@NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne
    @JoinColumn(name = "user_id", updatable = false, insertable = false)
    private User user;

    @Column(name = "user_id")
    private Integer userId;
}
