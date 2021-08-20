import {NavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export function navigate(routeName: string, params?: any) {
  navigationRef.current?.navigate(routeName, params);
}
