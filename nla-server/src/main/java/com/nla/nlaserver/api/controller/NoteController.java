package com.nla.nlaserver.api.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nla.nlaserver.api.service.NoteService;
import com.nla.nlaserver.common.dto.ListDeleteRequestDTO;
import com.nla.nlaserver.common.dto.NoteCreateRequestDTO;
import com.nla.nlaserver.common.dto.NoteUpdateRequestDTO;
import com.nla.nlaserver.common.model.Note;

@RestController
@RequestMapping("api/v1/notes")
public class NoteController {
	
	@Autowired
	private NoteService noteService;
	
	@GetMapping("")
	public ResponseEntity<?> getListNote(){
 		return new ResponseEntity<>(noteService.getALlNotes(), new HttpHeaders(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getNoteById(@PathVariable("id") Integer id){
 		return new ResponseEntity<>(noteService.getNoteById(id), new HttpHeaders(), HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity<?> createNewNote(@Valid @RequestBody NoteCreateRequestDTO request){
		
 		return new ResponseEntity<>(noteService.createNote(request), new HttpHeaders(), HttpStatus.OK); 
	}
	
	@PutMapping("")
	public ResponseEntity<?> updateNote(@Valid @RequestBody NoteUpdateRequestDTO request){
		
 		return new ResponseEntity<>(noteService.updateNote(request), new HttpHeaders(), HttpStatus.OK); 
	}
	
	@DeleteMapping("")
	public ResponseEntity<?> removeListNote(@Valid @RequestBody ListDeleteRequestDTO request){
		
 		return new ResponseEntity<>(noteService.removeListNote(request.getIds()), new HttpHeaders(), HttpStatus.OK); 
	}

}
