import {Component} from '@angular/core';
@Component({
    selector:'meu-app',
    template: `<h1>{{titulo}}</h1>
               <h2>{{subTitulo}}</h2>
               <taskboard></taskboard>`
})
export class AppComponent{
    titulo: string = "TaskBoard";
    subTitulo: string = "Estórias de Usuários";
}