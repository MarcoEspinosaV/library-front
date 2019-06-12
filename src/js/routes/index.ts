import { ADMIN_ROUTES } from './adminRoutes';
import { LOGIN_ROUTES } from './loginRoutes';
import { STUDENT_ROUTES } from './studentUserRoutes';

type IRouteSection = 'A' | 'B' | 'C';

export interface IRouteItem {
  authentication: string;
  component: object;
  customLink?: { type: string; data: any };
  icon?: any;
  id: string;
  hideSideNav?: boolean;
  key: string;
  name: {
    es_EC: string;
    en_US: string;
    [name: string]: any;
  };
  section?: IRouteSection;
  path?: string;
  redirectPath?: string;
  yearDependence?: boolean;
  pathParams?: string;
  parentId?: string;
  roles: string[];
  showOn: string[];
  showTitles: boolean;
  subTitle: string;
  theme: string;
  title: {
    ES: string;
    EN: string;
  };
  [name: string]: any;
}

export const ROUTES: { [name: string]: any } = {
  ...ADMIN_ROUTES,
  ...LOGIN_ROUTES,
  ...STUDENT_ROUTES
};

export const appConfigRoutes = () => {
  const appRoutes: Array<{ path: string; component: any; pathParams?: string }> = [];
  Object.keys(ROUTES).forEach(route => {
    const routeData = ROUTES[route];
    if (routeData.path) {
      appRoutes.push({ path: routeData.path, component: routeData.component, pathParams: routeData.pathParams });
    }
  });
  return appRoutes;
};
