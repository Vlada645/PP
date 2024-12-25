import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

constructor( private adminS : AdminService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean | Observable<boolean> | Promise<boolean> {
    return new Promise (resolve => {
      this.adminS.getAdmin().subscribe(admin => 
        {
          if(admin) resolve(true)
            else
          this.router.navigate(['/login'])
        }
      )
    })
  }
}
