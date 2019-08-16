package com.template.common.exception;


import com.template.common.support.HttpCode;

public class EncodeErrorException extends BaseException {

    public EncodeErrorException() {
    }

    public EncodeErrorException(String message) {
        super(message);
    }

    public EncodeErrorException(String message, Throwable ex) {
        super(message, ex);
    }

    @Override
    protected HttpCode getCode() {
        return HttpCode.Encode_ERROR;
    }
}
