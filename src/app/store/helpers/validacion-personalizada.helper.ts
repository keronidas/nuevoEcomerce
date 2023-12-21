import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NameArticleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const nombresProhibidos = ['Prueba', 'Test', 'Mock', 'Fake'];
        if (nombresProhibidos.includes(control.value)) {
            return { nombreProhibido: true };
        }
        return null;
    };
}