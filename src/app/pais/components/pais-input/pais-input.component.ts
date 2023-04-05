import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
@Input() placeholder: string = ''
@Output() onEnter: EventEmitter<string> = new EventEmitter();
@Output() onDebounce: EventEmitter<string>= new EventEmitter();

 debouncer: Subject<string> = new Subject();
 termino: string = '';
 
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.debouncer
  .pipe(debounceTime(300))
  .subscribe({next:valor=>{
  this.onDebounce.emit(valor)
  }})
 }

 buscar(){
 this.onEnter.emit(this.termino);
 }

 teclaPresionada(){
  this.debouncer.next(this.termino)
 }
}
