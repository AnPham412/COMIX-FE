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
    path: '/nav/users',
    icon: getIcon('bxs:user-circle'),
  },
  {
    title: 'History',
    path: '/nav/viewed',
    icon: getIcon('ic:baseline-history'),
  },
  {
    title: 'Post',
    path: '/nav/posts',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default config;
