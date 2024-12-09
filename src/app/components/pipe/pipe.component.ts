import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../Pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName:string = "angular"

  name2:string = "Angular Js"

  sentence:string = "angular is single page apploication";

  currentDate :Date = new Date

  student:any = {
    name :'Sumukh',
    city : 'Mysore',
    EmpId : 123,
    state : 'Karnataka'
  }

  currentTime : Observable<Date> = new Observable<Date>
  currentRole:string = ""
  constructor( ){
    this.currentTime = interval(1000).pipe(map(()=> new Date()));

    
  }
}
