import BadgePosition from '../models/BadgePosition';

export const desktopMainScreenBadgePosition: BadgePosition = {
  yellow: { top: window.innerHeight / 4, right: 0, rotate: 13 },
  green: { top: window.innerHeight / 2 + 150, left: 0, rotate: -13 },
};

export const desktopAboutBadgePosition: BadgePosition = {
  yellow: { left: 0, bottom: -165 - 165, rotate: 13 },
  green: { right: 0, bottom: -118 - 165, rotate: -13 },
};

export const mobileBadgePosition: BadgePosition = {
  yellow: { top: 0, left: -32, rotate: -27, position: 'fixed' },
  green: { right: -32, bottom: 124, rotate: -13, position: 'fixed' },
};
