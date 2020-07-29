package com.nla.nlaserver.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.PRECONDITION_FAILED)
public class PaginationSortingException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    private String errorMessage;

    @Override
    public String getMessage() {
        return errorMessage;
    }

    public PaginationSortingException() {
        super();
    }

    public PaginationSortingException(String errorMessage) {

        super(errorMessage);
        this.errorMessage = errorMessage;
    }
}
