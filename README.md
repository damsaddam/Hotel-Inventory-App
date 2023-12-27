# Hotelinventoryapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes
1. Stop the server: ctrl + c.

## The important command
1. ng g m [name]  --route=[name]  --routing --module=[root name]  => create the components, the module, a routing, and the lazy loading as well
2. ng g m [name] and then ng g c [name]  in case you wanna add the module to its related components automatically. So you don't have to add declarations in the module manually.
3. ng g g login --functional=false => create a guard named login (a example is './guards').
4. ng g s [name] => to create a service
5. ng g pipe [name] => creating a pipe

## Setting Up Reactive Forms
1. Import ReactiveFormsModule to the module that you want.
2. In Import Reactive Forms, create Forms using TypeScript.
3. Good for Developers who likes to have more control in TS file.
4. Uses API in Angular Material like FormGroup, FormControl, and FormDirectives.

## Submit and Reset Forms
1. Use ngSubmit to submit the form
2. Use reset to reset the form
