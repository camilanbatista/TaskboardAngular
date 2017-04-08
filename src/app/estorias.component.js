"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var estorias_mock_1 = require('./estorias.mock');
var TaskboardComponent = (function () {
    function TaskboardComponent() {
    }
    TaskboardComponent.prototype.ngOnInit = function () {
        this.taskboard = estorias_mock_1.TASKBOARD;
    };
    TaskboardComponent.prototype.exibeTarefasClick = function (estoria) {
        estoria.exibeTarefas = !estoria.exibeTarefas;
        return estoria;
    };
    TaskboardComponent.prototype.finalizarClick = function (estoria) {
        estoria.exibeCard = false;
        return estoria;
    };
    TaskboardComponent = __decorate([
        core_1.Component({
            selector: 'taskboard',
            templateUrl: 'app/estorias.component.html',
            styleUrls: ['app/estorias.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TaskboardComponent);
    return TaskboardComponent;
}());
exports.TaskboardComponent = TaskboardComponent;
//# sourceMappingURL=estorias.component.js.map