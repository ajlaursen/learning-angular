import { Component, OnInit } from '@angular/core';
import { AurthorsService } from '../aurthors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(service: AurthorsService) {
    this.authors = service.getAuthors()
   }

  ngOnInit(): void {
  }

}
