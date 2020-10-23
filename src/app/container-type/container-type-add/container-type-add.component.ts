import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContainerType } from '../container-type';
import { ContainerTypeService } from '../container-type.service';

@Component({
  selector: 'app-container-type-add',
  templateUrl: './container-type-add.component.html',
  styleUrls: ['./container-type-add.component.scss']
})
export class ContainerTypeAddComponent implements OnInit, OnDestroy {

  showAlert = false;
  message = '';
  private subscription: Subscription;

  constructor(private service: ContainerTypeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddContainerType(form: NgForm) {
    this.subscription = this.service.addContainerType(new ContainerType(0, form.value.name, form.value.description)).subscribe({
      next: data => {
        this.service.getContainerTypes();
        this.router.navigate(['/containertype']);
      },
      error: error => {
        console.error('Add container type error: ', error.error.message);
        this.message = 'Error: Can\'t add container type: ' + error?.error?.message;
        this.showAlert = true;
      }
    });
  }

  close() {
    this.showAlert = false;
  }

}
