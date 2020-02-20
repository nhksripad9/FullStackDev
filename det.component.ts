import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.css']
})
export class DetComponent implements OnInit {
tem:any[]=[[37,39,40],[26,28,32],[-6,5,13]];
item:number[];
  constructor() { }
dis(event):void{
  this.item=this.tem[event.target.value-1]
  
}
  ngOnInit(): void { this.item=this.tem[0]
  }

}
