import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from './pages/NotFoundPage.vue';
import RequestsPage from './pages/requests/RequestsPage.vue';
import RegistrationPage from './pages/registration/RegistrationPage';
import CoachesListPage from './pages/coaches/CoachesListPage';
import CoachDetailsPage from './pages/coaches/CoachDetailsPage';
import ContactCoachPage from './pages/coaches/ContactCoachPage';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/coaches'}, 
      { path: '/coaches', component: CoachesListPage },
      { path: '/coaches/:id', props: true, component: CoachDetailsPage, children: [
          { path: 'contact', component: ContactCoachPage }
        ] 
      },
      { path: '/register', component: RegistrationPage },
      { path: '/requests', component: RequestsPage },
      { path: '/:notFound(.*)', component: NotFoundPage }
    ]
});

export default router;