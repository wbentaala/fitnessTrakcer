import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SidenavListComponent } from '../sidenav-list/sidenav-list.component';
import { MatSidenav } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() sidenav: MatSidenav;
  isConnected: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authSubject.subscribe((data)=> {
      this.isConnected = data;
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  onLogout() {
    console.log('onlogout');
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
