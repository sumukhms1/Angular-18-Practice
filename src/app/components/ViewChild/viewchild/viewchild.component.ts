import { Component, ElementRef, ViewChild, AfterViewInit, viewChild } from '@angular/core';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {

  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    debugger;
    const alertMode =  this.alertComp?.alertMode;
  }

}
