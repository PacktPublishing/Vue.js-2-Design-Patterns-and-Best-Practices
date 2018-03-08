import UserList from './UserList';
import UserDetail from './UserDetail';
import UserPosts from './UserPosts';

export const userRoutes = [
  { path: '/', component: UserList },
  {
    path: '/:userId',
    component: UserDetail,
    children: [{ path: '/:userId', component: UserPosts }],
  },
];
