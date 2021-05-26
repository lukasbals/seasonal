interface PositionValues {
  left?: number;
  bottom?: number;
  right?: number;
  top?: number;
  rotate?: number;
  position?: 'fixed' | 'absolute';
}

export default interface BadgePosition {
  yellow: PositionValues;
  green: PositionValues;
}
