export const AppNavigation = {
  SPLASH_SCREEN: 'SplashScreen',
  SERVICE: 'Service',
  AUTH: {
    ROOT: 'Auth',
    LOGIN: 'Login',
    NAME: 'Name',
    AVATAR: 'Avatar',
    REFERRAL: 'Referral',
    WELCOME: 'Welcome',
  },

  TAB: {
    ROOT: 'Tab',
    HOME: 'Home',
    PROFILE: 'Profile',
    FOLDERS: 'Folders',
    SEARCH: 'Search',
  },
  HOME_STACK: {
    ROOT: 'HomeStack',
    OVERVIEW: 'Overview',
    PAYWALL: 'Paywall',
    NOTIFICATIONS: 'Notifications',
    LAST_SCREENSHOTS: 'Last_Screenshots',
    ALL_FOLDERS: 'All_Folders',
  },
} as const;
