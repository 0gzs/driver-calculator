import IRoute from '../interfaces/route';
import Breakdown from '../pages/Breakdown';
import DriverForm from '../pages/DriverForm';
import DriverName from '../pages/DriverName';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Welcome',
    exact: true,
    component: DriverName
  },
  {
    path: '/driver-form',
    name: 'Driver Form',
    exact: true,
    component: DriverForm
  },
  {
    path: '/breakdown',
    name: 'Breakdown',
    exact: true,
    component: Breakdown
  }
];

export default routes;
