package com.nla.nlaserver.api.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nla.nlaserver.common.dto.NoteCreateRequestDTO;
import com.nla.nlaserver.common.dto.NoteDTO;
import com.nla.nlaserver.common.dto.NoteUpdateRequestDTO;
import com.nla.nlaserver.common.dto.StatusResponseDTO;
import com.nla.nlaserver.common.exception.BadRequestException;
import com.nla.nlaserver.common.exception.ResourceNotFoundException;
import com.nla.nlaserver.common.model.Note;
import com.nla.nlaserver.common.model.NoteLabel;
import com.nla.nlaserver.common.repository.NoteLabelRepository;
import com.nla.nlaserver.common.repository.NoteRepository;
import com.nla.nlaserver.common.util.constant.MessageConstant;

@Service
public class NoteService {

	@Autowired
	NoteRepository noteRepository;
	
	@Autowired 
	NoteLabelRepository noteLabelRepository;

	public List<NoteDTO> getALlNotes() {
		List<Note> noteList = noteRepository.findAll();
		if (!noteList.isEmpty()) {
			return noteList.stream().map(NoteDTO::new).collect(Collectors.toList());
		}
		return new ArrayList<>();
	}

	public NoteDTO getNoteById(Integer id) {
		Note noteResult = noteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Note", "note id", id));
		return new NoteDTO(noteResult);
	}

	public NoteDTO createNote(NoteCreateRequestDTO request) {
		Note newNote = new Note();
		newNote.setTitle(request.getTitle());
		newNote.setContent(request.getContent());
		newNote.setDescription(request.getDescription());
		// newNote.setNoteTypeId(request.getNoteTypeId());
		newNote.setNoteTypeId(1);
		newNote.setCreated(LocalDateTime.now());
		newNote.setModified(LocalDateTime.now());

		try {
			Note noteResult = noteRepository.save(newNote);
			return new NoteDTO(noteResult);
		} catch (Exception e) {
			throw new BadRequestException(MessageConstant.NOTE_CANNOT_CREATE);
		}

	}

	public NoteDTO updateNote(NoteUpdateRequestDTO request) {
		Note noteUpdate = noteRepository.findById(request.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Note", "note id", request.getId()));
		if (request.getTitle() != null)
			noteUpdate.setTitle(request.getTitle());
		if (request.getContent() != null)
			noteUpdate.setContent(request.getContent());
		if (request.getDescription() != null)
			noteUpdate.setDescription(request.getDescription());

		// newNote.setNoteTypeId(request.getNoteTypeId());
		noteUpdate.setModified(LocalDateTime.now());

		try {
			Note noteResult = noteRepository.save(noteUpdate);
			return new NoteDTO(noteResult);
		} catch (Exception e) {
			throw new BadRequestException(MessageConstant.NOTE_CANNOT_CREATE);
		}

	}

	public StatusResponseDTO removeListNote(List<Integer> request) {
		List<Integer> idNotExisteds = new ArrayList<>();
		if (!request.isEmpty()) {
			request.forEach(id -> {
				Optional<Note> note = noteRepository.findById(id);
				if (!note.isPresent()) {
					idNotExisteds.add(id);
				}
			});
		}

		if (!idNotExisteds.isEmpty()) {
			AtomicReference<String> idNotExisted = new AtomicReference<>(". Not existed with id: ");
			idNotExisteds.forEach(id -> idNotExisted.updateAndGet(v -> v + id + " ; "));
			throw new BadRequestException(idNotExisted.get());
		}

		if (!request.isEmpty() && idNotExisteds.isEmpty()) {
			request.forEach(id -> {
				try {
					List<NoteLabel> noteLabelList = noteLabelRepository.findByNoteId(id);
					if(!noteLabelList.isEmpty()) {
						noteLabelList.stream().forEach(noteLabel -> {
							noteLabelRepository.deleteById(noteLabel.getId());
						});
					}
					noteRepository.deleteById(id);
				} catch (Exception e) {
					throw new BadRequestException(MessageConstant.NOTE_CANNOT_DELETE);
				}
			});
		}
		return new StatusResponseDTO(true, MessageConstant.NOTE_DELETE_SUCCESSFULLY);

	}
}
