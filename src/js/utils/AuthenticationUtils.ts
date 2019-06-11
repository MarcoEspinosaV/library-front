import { ROLES } from '../constants/appRoles';
import { AUTHENTICATION_TYPES } from '../constants/authenticationConstants';
import { ROUTES } from '../routes';
import { LOGIN_ROUTES } from '../routes/loginRoutes';
import { getLocationData } from './UrlUtils';

export const validateIfIsLoginRoute = (location: string) => {
  let isLogin = false;
  Object.keys(LOGIN_ROUTES).forEach(item => {
    if (LOGIN_ROUTES[item].authentication === AUTHENTICATION_TYPES.LOGIN) {
      if (LOGIN_ROUTES[item].path !== '/' && location.includes(LOGIN_ROUTES[item].path)) {
        isLogin = true;
        // http://localhost:8081/ingresar/harvard_USA?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2M5ZjJjZDhhODkwZjE5ODdhZGEwZTQiLCJzY2hvb2wiOnsiaWQiOiI1Y2E0ZDRiZjBkZjY0MzRlNjVlMGJkNjciLCJuYW1lIjoiSGFydmFyZCJ9LCJ1c2VyIjp7ImlkIjoiNWNjOWYyY2Q4YTg5MGYxOTg3YWRhMGU1IiwiZmlyc3ROYW1lIjoiRGVubmlzIn0sImlhdCI6MTU1NjczODc2NSwiZXhwIjoxNTU2ODM4NzY1fQ.dRMQzfA2kcKo5MT7p290bZ_3sSQ8u-MckbYgsG3g-40
      } else if (LOGIN_ROUTES[item].path === location) {
        isLogin = true;
      }
    }
  });
  return isLogin;
};

export const validRouteRole = (location: string, activeRole: any) => {
  const mySubString = location.split('/');
  let validRoleForThisRoute = false;
  Object.keys(ROUTES).forEach(item => {
    if (
      ROUTES[item].path === `/${mySubString[1]}` &&
      (!ROUTES[item].roles || (ROUTES[item].roles && !ROUTES[item].roles.length))
    ) {
      validRoleForThisRoute = true;
    } else if (ROUTES[item].path === `/${mySubString[1]}`) {
      if (ROUTES[item].roles.includes(activeRole.role)) {
        validRoleForThisRoute = !(
          ROUTES[item].roles.includes(ROLES.STAFF.id) &&
          ROUTES[item].roles.includes(ROLES.SUPPORT.id) &&
          activeRole.role === ROLES.SUPPORT.id &&
          !activeRole.school
        );
      }
    }
  });
  return validRoleForThisRoute;
};

export const validateIfIsAuthenticationRoute = (location: string) => {
  let validRoleForThisRoute = false;
  if (getLocationData(location).authentication === 'TOKEN') {
    validRoleForThisRoute = true;
  }
  return validRoleForThisRoute;
};

export const haveRole = (roleList: string[], userRoles: string[]) => {
  let validRoles = false;
  (userRoles || []).forEach(role => {
    if (roleList.includes(role)) {
      validRoles = true;
    }
  });
  return validRoles;
};

export const isAdmin = (role: string) => {
  let isAdminRole = false;
  if (role === ROLES.ADMIN.id) {
    isAdminRole = true;
  }
  return isAdminRole;
};
