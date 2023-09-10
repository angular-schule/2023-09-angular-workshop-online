import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { MulticastComponent } from './multicast/multicast.component';
import { HigherorderComponent } from './higherorder/higherorder.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { CreatingComponent } from './creating/creating.component';

export const exercisesRoutes: Routes = [
  { path: 'exercises', children: [
    { path: '', component: OverviewComponent },
    { path: 'creating', component: CreatingComponent },
    { path: 'fromevent', component: FromeventComponent },
    { path: 'multicast', component: MulticastComponent },
    { path: 'error-handling', component: ErrorHandlingComponent },
    { path: 'unsubscribe', component: UnsubscribeComponent },
    { path: 'higherorder', component: HigherorderComponent },
    { path: 'dragdrop', component: DragdropComponent },
  ] }
];
