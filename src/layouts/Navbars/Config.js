// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const config = [
  {
    title: 'Article',
    path: '/view',
    icon: getIcon('ic:outline-photo-album'),
  },
  {
    title: 'User',
    path: '/users',
    icon: getIcon('bxs:user-circle'),
  },
  {
    title: 'History',
    path: '/viewed',
    icon: getIcon('ic:baseline-history'),
  },
  {
    title: 'Post',
    path: '/post',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default config;
