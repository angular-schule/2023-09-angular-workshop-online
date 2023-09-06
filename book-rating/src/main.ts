import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


/////////////////////



export class Customer {
  /*id: number;

  constructor(id: number) {
    this.id = id;
  }*/

  // Constructor Shorthand
  constructor(public id: number) {
    console.log(this.id);
  }

  foobar(arg: number): string {

    setTimeout(() => {
      console.log('ID', this.id);
    }, 2000);

    return '';
  }
}


const myCustomer = new Customer(3);
myCustomer.foobar(5);




