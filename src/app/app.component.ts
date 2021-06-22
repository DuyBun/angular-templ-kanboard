import { Component } from '@angular/core';
import { JobList }   from 'src/app/object.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanboard';

  jobLists: JobList[] = [
    {
      name : "todo",
      jobs : [ 'Get to work',
      'Pick up groceries',
       'Go home',
       'Fall asleep'],
       newJob : "",
    },

    {
      name : "Doing",
      jobs : [ 'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'],
      newJob : "",
    }
  ]

  addNewList(listName: string){
    this.jobLists.push({
      name : listName,
      jobs: [],
      newJob : "",
    })
  }
}
