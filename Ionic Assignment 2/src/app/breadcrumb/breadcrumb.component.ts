import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators'; 
import { MenuController } from '@ionic/angular';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit{
  // breadcrumbs: any[];
  name: string;
  // menu: Array<any>[];
  breadcrumbList: Array<any> = [];
  menu: Array<any> = [];
  // key: string = undefined;
  //   labelName: string = undefined;
  //   path: string = '';   
  //   terminalOnly?: boolean = undefined; 
  //   afterBaseOnly?: boolean = undefined;
  //   pathParamList?: Array<any> = [];
  //   queryParams?: any = undefined;
  //   fragment?: string = undefined;

  constructor(private _router: Router, private activatedRoute: ActivatedRoute, private menuService: MenuService) { }
  ngOnInit(){

    this.menu = this.menuService.getMenu();
    this.listenRouting();
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .pipe(map(() => this.activatedRoute))
    //   .pipe(map((route) => {
    //     while (route.firstChild) { route = route.firstChild; }
    //     return route;
    //   }))
    //   .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
    //   .subscribe(route => {

    //     let snapshot = this.router.routerState.snapshot;
    //     this.breadcrumbs = [];
    //     let url = snapshot.url;
    //     let routeData = route.snapshot.data;

    //     console.log(routeData);
    //     let label = routeData['breadcrumb'];
    //     let params = snapshot.root.params;

    //     this.breadcrumbs.push({
    //       url: url,
    //       label: label,
    //       params: params
    //     });

    //   });
  }
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if(routerUrl && typeof routerUrl === 'string'){
        target = this.menu;
        this.breadcrumbList.length = 0;
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          target = target.find(page => page.path.slice(2) === router);
          this.breadcrumbList.push({
            name: target.name,
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });
          
          if(index+1 !== routerList.length){
            target = target.children;
          }
        });
        console.log(this.breadcrumbList);
      }
    })
  }


}
