import {AUTHENTICATION_TYPES} from "../constants/authenticationConstants";
import {APP_THEMES} from "../constants/themes";
import HomeContainer from "../containers/sections/student/HomeContainer";

export const STUDENT_ROUTES: any = {
  /* tslint:disable:object-literal-sort-keys */
    HOME: {
        authentication: AUTHENTICATION_TYPES.PUBLIC,
        component: HomeContainer,
        customLink: null,
        icon: '',
        id: 'HOME',
        key: 'home',
        name: 'Home',
        path: '/home',
        roles: [],
        showOn: [AUTHENTICATION_TYPES.LOGIN],
        showTitles: false,
        subTitle: false,
        theme: APP_THEMES.LOGIN.id,
        title: 'Home'
    }
  /* tslint:enable:object-literal-sort-keys */
};
