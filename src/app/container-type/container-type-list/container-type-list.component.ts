import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContainerType } from '../container-type';
import { ContainerTypeService } from '../container-type.service';

@Component({
  selector: 'app-container-type-list',
  templateUrl: './container-type-list.component.html',
  styleUrls: ['./container-type-list.component.scss']
})
export class ContainerTypeListComponent implements OnInit {

  containerTypes: ContainerType[] = [];

  constructor(private service: ContainerTypeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.containerTypes$.subscribe(data => {
      this.containerTypes = [];
      if (data) {
        data.forEach(item => {
          this.containerTypes.push(item);
        })
      }
    })

    this.service.getContainerTypes();
  }

  onAddContainerType() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDeleteContainerType(id: number) {
    if (this.confirmDelete()) {
      this.service.deleteContainerType(id);
    }
  }

  confirmDelete() {
    return confirm("Are you sure you want to delete this item");
  }

  cancel() {

  }

}
