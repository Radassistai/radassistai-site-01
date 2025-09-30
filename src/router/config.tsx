
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const Solutions = lazy(() => import('../pages/solutions/page'));
const Blog = lazy(() => import('../pages/blog/page'));
const CaseStudies = lazy(() => import('../pages/case-studies/page'));
const HubNigeria = lazy(() => import('../pages/hub-nigeria/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const FutureNHSRadiologyAI = lazy(() => import('../pages/blog/posts/future-nhs-radiology-ai-transformation'));
const ReducingRadiologyBacklogs = lazy(() => import('../pages/blog/posts/reducing-radiology-backlogs-data-driven'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/solutions',
    element: <Solutions />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/case-studies',
    element: <CaseStudies />,
  },
  {
    path: '/blog/future-nhs-radiology-ai-transformation',
    element: <FutureNHSRadiologyAI />,
  },
  {
    path: '/blog/reducing-radiology-backlogs-data-driven',
    element: <ReducingRadiologyBacklogs />,
  },
  {
    path: '/hub-nigeria',
    element: <HubNigeria />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
