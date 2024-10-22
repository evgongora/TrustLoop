import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ring.web.ts
// and on native platforms to ring.ts
import ringModule from './src/ringModule';
import ringView from './src/ringView';
import { ChangeEventPayload, ringViewProps } from './src/ring.types';

// Get the native constant value.
export const PI = ringModule.PI;

export function hello(): string {
  return ringModule.hello();
}

export async function setValueAsync(value: string) {
  return await ringModule.setValueAsync(value);
}

const emitter = new EventEmitter(ringModule ?? NativeModulesProxy.ring);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ringView, ringViewProps, ChangeEventPayload };
