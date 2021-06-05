'use strict';

export const numeric: any = /^[0-9]*$/;
export const name: any = /^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/;
export const alfanumerico: any = /^[A-Za-z0-9ñÑáÁéÉíÍóÓúÚüÜ. ]*$/;
export const email: any = /(^[\w\d-!#$%&'*+/=?^`{|}]+(\.[\w\d-!#$%&'*+/=?^`{|}]+)*@[\w\d {\/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$)/;