import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @Output() onAddNewList = new EventEmitter();

  newList : string = "";

  constructor() { }

  ngOnInit() {
  }

  addNewList(){
    if(this.newList.trim()){
      this.onAddNewList.emit(this.newList);
      this.newList = "";
    }
  }
}
