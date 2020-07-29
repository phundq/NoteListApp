package com.nla.nlaserver.common.dto;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;


import lombok.Data;

@Data
public class NoteCreateRequestDTO{

	@NotBlank
	private String title;

	private String description = "Description";
	
	@NotBlank
	private String content;

	private List<Integer> labelIdList = new ArrayList<Integer>();

	private Integer noteTypeId = 1;
}
