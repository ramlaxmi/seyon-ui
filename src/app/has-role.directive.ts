import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { Urls, APIURLS } from './app.constants';
import { UserInfo, UserRole } from './users/users.domain';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CompanyGlobalVar } from './globals';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {

  private currentUser;
  private permissions = [];
  user: UserInfo = new UserInfo();
  userRole: string[];

  constructor(private el: ElementRef, private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private http: HttpClient) {
  }

  @Input()
  set appHasRole(val) {
    this.permissions = val;
    this.processRoles();
  }

  ngOnInit() {
  }

  async processRoles() {
    if(!this.userRole){
      this.userRole = await this.getRolesP();
    }
   // console.log(this.permissions);
  //  console.log(this.userRole);
    this.updateView()
  }

  private updateView() {
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;
    if (this.userRole) {
      for (const checkPermission of this.permissions) {
        const permissionFound = this.userRole.find(x => x.toUpperCase() === checkPermission.toUpperCase());
        console.log("searching and finding permission"+permissionFound);
        if(permissionFound){
          hasPermission=true;
          break;
        }
      }
    }
    return hasPermission;
  }

  getRolesP(): Promise<string[]> {
    var url = Urls.getDomain().concat(APIURLS.userrole).concat("/authenticated");
    console.log("getting user role in ajax")
    return this.http.get<string[]>(url, { headers: httpOptions.headers })
      .toPromise()
  }

}
