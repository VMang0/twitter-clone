import BookmarksIcon from '@assets/icons/bookmarks-icon.svg?react';
import ExploreIcon from '@assets/icons/explore-icon.svg?react';
import HomeIcon from '@assets/icons/home-icon.svg?react';
import ListsIcon from '@assets/icons/lists-icon.svg?react';
import MessagesIcon from '@assets/icons/messages-icon.svg?react';
import MoreIcon from '@assets/icons/more-icon.svg?react';
import NotificationIcon from '@assets/icons/notification-icon.svg?react';
import ProfileIcon from '@assets/icons/profile-icon.svg?react';

export const navbar = [
  {
    label: 'Home',
    Icon: HomeIcon,
    link: '/feed',
  },
  {
    label: 'Explore',
    Icon: ExploreIcon,
    link: '/explore',
  },
  {
    label: 'Notifications',
    Icon: NotificationIcon,
    link: '/notifications',
  },
  {
    label: 'Messages',
    Icon: MessagesIcon,
    link: '/messages',
  },
  {
    label: 'Bookmarks',
    Icon: BookmarksIcon,
    link: '/bookmarks',
  },
  {
    label: 'Lists',
    Icon: ListsIcon,
    link: '/lists',
  },
  {
    label: 'Profile',
    Icon: ProfileIcon,
    link: `/profile`,
  },
  {
    label: 'More',
    Icon: MoreIcon,
    link: `/more`,
  },
] as const;

export type NavBarItemType = (typeof navbar)[number];
