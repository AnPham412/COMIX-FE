// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const config = [
  {
    title: 'Article',
    path: '/nav/view',
    icon: getIcon('ic:outline-photo-album'),
  },
  {
    title: 'User',
    path: '/auth/users',
    icon: getIcon('bxs:user-circle'),
  },
  {
    title: 'History',
    path: 'auth/viewed',
    icon: getIcon('ic:baseline-history'),
  },
  {
    title: 'Post',
    path: '/nav/post',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Friends',
    path: 'auth/friend',
    icon: getIcon('fa-solid:user-friends'),
  },
];

export default config;
