import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colSpan]="colSpan"></td>
      </tr>
    </table>
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      (click)="onSave($event)"
    >
      Save
    </button>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl = 'https://via.placeholder.com/150';
  colSpan = 2;
  isActive = true;

  email = "me@example.com";

  onSave($event: Event) {
    $event.stopPropagation();
    console.log('button was clicked', $event);
  }
  onKeyUp(){
    console.log(this.email)
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
