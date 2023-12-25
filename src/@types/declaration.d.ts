import { ViewProps } from 'react-native';

interface MouseEvents {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  tooltip?: string;
}

declare module 'react-native' {
  export interface ViewProps extends MouseEvents {
  }
}