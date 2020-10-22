import { Component, OnInit } from '@angular/core';
import { ContainerType } from './container-type';

@Component({
  selector: 'app-container-type-list',
  templateUrl: './container-type-list.component.html',
  styleUrls: ['./container-type-list.component.scss']
})
export class ContainerTypeListComponent implements OnInit {
  containerTypes: ContainerType[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAddContainerType() {

  }

  onDeleteContainerType() {

  }

}
