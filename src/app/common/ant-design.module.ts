import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
const componentsModule = [
  NzButtonModule,
  NzIconModule
];

@NgModule({
  imports: [...componentsModule],
  exports: [...componentsModule],
})
export class PrimeNgModule { }
