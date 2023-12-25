import { ErrorHandler } from "@angular/core";

/* ErrorHandler prints error messages to the `console`. This is important to know where the error happens. */
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log(error);
    }
}