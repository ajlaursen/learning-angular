import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <img [src]="imageUrl"/>
    <table>
     <tr>
        <td [attr.colSpan]="colSpan">
      </tr>
    </table>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl = "https://via.placeholder.com/150"
  colSpan = 2

  
  constructor(service: CoursesService){
    
    this.courses = service.getCourses()
  }


}
