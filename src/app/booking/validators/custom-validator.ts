import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
    /* AbstractControl is a base class for everything related to form, for example are form group, form control, form array. It has all the information about that form */
    static ValidateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return {
                invalidName: true,
            };
        }
        return null;
    }

    static ValidateSpecialChar(char: any) {
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(char)) {
                return {
                    invalidSpecialChar: true,
                };
            }
            return null;
        };
    }
}
