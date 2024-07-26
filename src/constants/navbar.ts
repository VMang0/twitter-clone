import BookmarksIcon from '@assets/icons/bookmarks-icon.svg';
import ExploreIcon from '@assets/icons/explore-icon.svg';
import HomeIcon from '@assets/icons/home-icon.svg';
import ListsIcon from '@assets/icons/lists-icon.svg';
import MessagesIcon from '@assets/icons/messages-icon.svg';
import MoreIcon from '@assets/icons/more-icon.svg';
import NotificationIcon from '@assets/icons/notification-icon.svg';
import ProfileIcon from '@assets/icons/profile-icon.svg';

export const navbar = [
  {
    label: 'Home',
    icon: HomeIcon,
    link: '/feed',
  },
  {
    label: 'Explore',
    icon: ExploreIcon,
    link: '/explore',
  },
  {
    label: 'Notifications',
    icon: NotificationIcon,
    link: '/notifications',
  },
  {
    label: 'Messages',
    icon: MessagesIcon,
    link: '/messages',
  },
  {
    label: 'Bookmarks',
    icon: BookmarksIcon,
    link: '/bookmarks',
  },
  {
    label: 'Lists',
    icon: ListsIcon,
    link: '/lists',
  },
  {
    label: 'Profile',
    icon: ProfileIcon,
    link: `/profile`,
  },
  {
    label: 'More',
    icon: MoreIcon,
    link: `/more`,
  },
] as const;

export type NavBarItemType = (typeof navbar)[number];
