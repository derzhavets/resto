import { RestoComponent } from './components/resto/resto.component';
import { RestoListComponent } from './components/resto-list/resto-list.component';
import { TableComponent } from './components/table/table.component';

export const AppRoutes = [{
    path: '',
    redirectTo: 'resto-list',
    pathMatch: 'full'
}, {
    path: 'resto-list',
    component: RestoListComponent
}, {
    path: 'restos/:id',
    component: RestoComponent
}, {
    path: 'tables/:id',
    component: TableComponent
}]