package com.nla.nlaserver.common.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import lombok.Data;

@Data
@Entity
@Table(name = "note_label")
public class NoteLabel extends BaseModel {

	@NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne
    @JoinColumn(name = "label_id", updatable = false, insertable = false)
    private Label label;

    @Column(name = "label_id")
    private Integer labelId;
    
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne
    @JoinColumn(name = "note_id", updatable = false, insertable = false)
    private Note note;

    @Column(name = "note_id")
    private Integer noteId;
}
