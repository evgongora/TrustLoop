import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ringViewProps } from './ring.types';

const NativeView: React.ComponentType<ringViewProps> =
  requireNativeViewManager('ring');

export default function ringView(props: ringViewProps) {
  return <NativeView {...props} />;
}
