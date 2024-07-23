import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,OnDestroy{
// @Input() name1:any
// @Output()cevent:any=new EventEmitter()
// public name=["king","king","king","king"]
// sendData(){
// this.cevent.emit(this.name)
// }
@Input()name1:any;
// ngonchange , ngonint, ngdocheck concept //
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}
ngOnInit(): void {
  console.log("ngonInt Fire")
}
ngDoCheck(): void {
  console.log("do check")
}
ngOnDestroy(): void {
  console.log("Error ,Data Stops")
}
// ngonchange , ngonint, ngdocheck concept //

}
