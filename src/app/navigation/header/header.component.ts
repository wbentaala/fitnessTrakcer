import { Component, OnInit, Input } from '@angular/core';
import { SidenavListComponent } from '../sidenav-list/sidenav-list.component';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
