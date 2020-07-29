package com.nla.nlaserver.common.dto;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class NoteUpdateRequestDTO {

	@NotNull
	@Positive
	private Integer id;
	
	private String title;

	private String description = "Description";
	
	private String content;

	/* private List<Integer> labelIdList = new ArrayList<Integer>(); */

	/* private Integer noteTypeId = 1; */
}
