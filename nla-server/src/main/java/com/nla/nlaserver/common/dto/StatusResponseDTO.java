package com.nla.nlaserver.common.dto;

import lombok.Data;

@Data
public class StatusResponseDTO {

	private boolean status;
	
	private String message;

	public StatusResponseDTO(boolean status, String message) {
		this.status = status;
		this.message = message;
	} 
	
}
