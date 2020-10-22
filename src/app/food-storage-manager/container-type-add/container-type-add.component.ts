import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-type-add',
  templateUrl: './container-type-add.component.html',
  styleUrls: ['./container-type-add.component.scss']
})
export class ContainerTypeAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddContainerType(form: NgForm) {
    this.router.navigate(['/foodstorage/add']);
  }

}
