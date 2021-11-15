import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit, ICellRendererAngularComp {

  private params;
  private parent;

  constructor() { }

  ngOnInit(): void {
  
  }

  agInit(params: any){
    this.params = params;
    this.parent = params.context.componentParent;
  }

  refresh(params: any){
    return true;
  }

  onDelete(){
    this.parent.deleteGuest(this.params.data);
  }



}
