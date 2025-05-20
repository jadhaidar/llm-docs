import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { api } from '../backend/convex/_generated/api';

// This is the Convex client that will be used across the application
export { ConvexProvider, ConvexReactClient };
export { api };

// Re-export useful types
export type { GenericId } from 'convex/values';

// Helper for creating a client
export function createConvexClient(deploymentUrl: string) {
  return new ConvexReactClient(deploymentUrl);
}

// Export everything from the generated API
export * from '../backend/convex/_generated/api'; 