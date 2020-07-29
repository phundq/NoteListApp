package com.nla.nlaserver.common.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nla.nlaserver.common.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {

}
