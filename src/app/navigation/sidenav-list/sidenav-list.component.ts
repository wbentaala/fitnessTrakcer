import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Input() sidenav;
  isConnected: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authSubject.subscribe((data) => {
      this.isConnected = data;
    });
  }

  closeSidenav() {
    this.sidenav.close();
  }

  onLogout() {
    this.authService.logout();
    this.closeSidenav();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }


}
