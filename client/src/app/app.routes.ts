import { TableReservationComponent } from './components/table-reservation/table-reservation.component';
import { MainComponent } from './components/main/main.component';
import { RestoListComponent } from './components/resto-list/resto-list.component';
import { RestoViewComponent } from './components/resto-view/resto-view.component';

export const AppRoutes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    }, {
        path: 'main',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'restos', pathMatch: 'full' },
            { path: 'restos', component: RestoListComponent },
            { path: 'restos/:id', component: RestoViewComponent },
            { path: 'tables/:id', component: TableReservationComponent }
        ]
    }
]