# NgxSignGen

This library is an Angular-based wrapper class for [text-signature](https://www.npmjs.com/package/text-signature).

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

## Installation

Using [npm](https://www.npmjs.com/package/ngx-sign-gen):

```
$ npm i ngx-sign-gen
```

## Usage

Import `NgxSignGenModule` into your `app.module.ts` file as follows:

// Other imports
import { NgxSignGenModule } from 'ngx-sign-gen';

@NgModule({
imports: [
// ...
NgxSignGenModule
],
providers: [],
})
export class AppModule { }


## Available Options

| Option | Required? | Description |
|---|---|---|
|[signGenSrc]| true | The text variable that you want to convert into a signature |
|[signGenConfig]| true | The configuration to use to generate the signature image |
|(signGenImg)| true | An event handler to capture the signature image generated |

## Usage

You can use the options listed above as follows:

In your component file `app.component.ts`:

export class AppComponent {
// ...
img: string = '';
username: string = '';

config: any = {
width: 500,
height: 150,
paddingX: 50,
paddingY: 80,
font: ["50px", "'Homemade Apple'"],
color: "black",
customFont: {
name: "'Homemade Apple'",
url: "http://fonts.googleapis.com/css?family=Homemade+Apple"
}
};

getImage(data) {
this.img = data;
}
}


In your html file `app.component.html`:

```
<img class="img-fluid bd rounded" style="height: 5rem; width: 100%; border: 1px solid lightgray;" alt="Signature" [src]="img">
<input type="text" [(ngModel)]="username" [signGenSrc]="username" [signGenConfig]="config" (signGenImg)="getImage($event)">
```

## Output

![NgxSignGenModule Demo](https://media.giphy.com/media/lYzOAZC4rd8P3FZuWz/giphy.gif)