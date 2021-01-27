import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  navBarOpen = false;
  public clicked = false;
  _el: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navBarOpen = !this.navBarOpen;
    console.log('toggleNavbar', this.navBarOpen);
  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
    console.log('In onClick');
  }

  onClickOutset() {
    this.navBarOpen = false;
  }

  // @HostListener('') onHostClick() {
  //   console.log('On Host clicked');
  //   if (this.navBarOpen) {
  //     this.navBarOpen = false;
  //   }
  // }

  openAddFoodProductTypeDialog() {
    this.router.navigate(['foodstorage', 'types']);
  }

}
