import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContainerType } from '../container-type';

@Component({
  selector: 'app-container-type-list',
  templateUrl: './container-type-list.component.html',
  styleUrls: ['./container-type-list.component.scss']
})
export class ContainerTypeListComponent implements OnInit {
  containerTypes: ContainerType[] = [];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAddContainerType() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onDeleteContainerType() {

  }

}
