import {QueryList} from '@angular/core';
import {ValidatorFn} from "@angular/forms";

export const EMPTY_QUERY = new QueryList<any>();
export const EMPTY_ARRAY: [] = [];
export const EMPTY_FUNCTION: Function = () => {};
export const EMPTY_VALIDATOR: ValidatorFn = () => null;
