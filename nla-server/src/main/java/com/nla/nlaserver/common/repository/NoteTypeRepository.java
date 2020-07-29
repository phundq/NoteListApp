package com.nla.nlaserver.common.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nla.nlaserver.common.model.NoteType;

@Repository
public interface NoteTypeRepository extends JpaRepository<NoteType, Integer> {

}
