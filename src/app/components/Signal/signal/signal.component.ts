import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Sumukh");
  lastName = signal("M S");

  fullName = computed(()=> this.firstName() +" "+this.lastName())

  courseName: string = "Java";

  rollNo = signal<number>(123);

  cityList =  signal(["Karnataka",'Mumbai']);
  studentObj = signal({
    name:'Sumukh',
    city:'Pune'
  })


  constructor(private cd: ChangeDetectorRef) {
    const fNae =  this.firstName();
    setTimeout(() => {
      this.firstName.set("Dot Net");
      this.courseName = "HTML";
      this.cd.detectChanges()
    }, 5000);
   
  }
  changeStudetnCity() {
    this.studentObj.set({...this.studentObj(),city:'Mumbai'})
  }
  addCity() {
    this.cityList.set([...this.cityList(),"Nagpur"])
  }

  changeName() {
    this.firstName.set("Sachin")
  }
  changeLastName() {
    this.lastName.set("Tendulkar")
  }


}