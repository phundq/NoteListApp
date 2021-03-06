package com.nla.nlaserver.common.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nla.nlaserver.common.model.NoteLabel;

@Repository
public interface NoteLabelRepository extends JpaRepository<NoteLabel, Integer>{
	List<NoteLabel> findByNoteId(Integer noteId);
	
}
