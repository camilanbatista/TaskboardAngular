import {Component} from '@angular/core';
import {Estoria} from './estoria';
import{TASKBOARD} from './estorias.mock';

@Component({
    selector:'taskboard',
    templateUrl: 'app/estorias.component.html',
    styleUrls: ['app/estorias.component.css']
})
export class TaskboardComponent{
    taskboard: Estoria[];

    ngOnInit(){
        this.taskboard = TASKBOARD;
    }

    exibeTarefasClick(estoria: Estoria){
    	estoria.exibeTarefas = !estoria.exibeTarefas;
    	return estoria;
    }

    finalizarClick(estoria: Estoria){
    	estoria.exibeCard = false;
    	return estoria;
    }

}