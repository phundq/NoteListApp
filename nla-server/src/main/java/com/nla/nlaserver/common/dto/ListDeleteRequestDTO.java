package com.nla.nlaserver.common.dto;

import java.util.List;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class ListDeleteRequestDTO {

	@NotEmpty
	private List<Integer> ids;
}
