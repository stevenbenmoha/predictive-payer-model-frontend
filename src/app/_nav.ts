interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Decision Dashboard',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'Navigation'
  },
  {
    name: 'Predictive Model',
    url: '/model',
    icon: 'icon-layers',
    children: [
      {
        name: 'Model Data Input',
        url: '/model/input',
        icon: 'icon-calculator'
      }
    ]
  },
  {
    name: 'Analytics',
    url: '/charts',
    icon: 'icon-chart',
    children: [
      {
        name: 'Placeholder',
        url: '  ',
        icon: 'icon-graph'
      }
    ]
  }
];