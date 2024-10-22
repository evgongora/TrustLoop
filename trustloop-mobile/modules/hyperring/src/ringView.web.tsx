import * as React from 'react';

import { ringViewProps } from './ring.types';

export default function ringView(props: ringViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
