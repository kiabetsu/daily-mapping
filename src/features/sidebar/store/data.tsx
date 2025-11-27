import { ReactComponent as Dashboard } from '../../../assets/Atom.svg';
import { ReactComponent as Categories } from '../../../assets/Vector (2).svg';
import { ReactComponent as Settings } from '../../../assets/GearSix.svg';

const endIcon = (
  <div
    style={{
      backgroundColor: '#dbc2fdff',
      color: '#975BEC',
      borderRadius: '50%',
      height: '26px',
      width: '26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    2
  </div>
);

const user = {
  avatar: 'avatar',
  username: 'Sadek Hosen',
  substring: 'Team Plan',
};

const options = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    isActive: true,
    startIcon: <Dashboard />,
    endIcon: endIcon,
  },
  {
    id: 'categories',
    label: 'Task Categories',
    isActive: false,
    startIcon: <Categories />,
    endIcon: endIcon,
  },
  {
    id: 'settings',
    label: 'Settings',
    isActive: false,
    startIcon: <Settings />,
    endIcon: endIcon,
  },
];

const workspaceProjects = [
  {
    id: 0,
    title: 'Client Projects',
    isActive: false,
    tasks: [
      {
        id: 0,
        isActive: false,
        title: 'Client Projects 1',
      },
      {
        id: 1,
        isActive: false,
        title: 'Client Projects 2',
      },
    ],
  },
  {
    id: 1,
    title: 'Fintask Web',
    isActive: false,
    tasks: [
      {
        id: 2,
        isActive: false,
        title: 'Landing page 1',
      },
      {
        id: 3,
        isActive: false,
        title: 'Landing page 2',
      },
    ],
  },
  {
    id: 2,
    title: 'Habit Tracker',
    isActive: false,
    tasks: [
      {
        id: 4,
        isActive: false,
        title: 'Habit Tracker 1',
      },
      {
        id: 5,
        isActive: false,
        title: 'Habit Tracker 2',
      },
    ],
  },
];

export { user, options, workspaceProjects };
