import { Component, Input, OnInit } from '@angular/core';
import { JobList }   from 'src/app/object.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() jobLists: JobList[];

  constructor() { }

  ngOnInit() {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addNewJob(index:number, value: string){
    if(this.jobLists[index].newJob.trim()){
    this.jobLists[index].jobs.push(value);
    this.jobLists[index].newJob = "";
    }
  }
}
