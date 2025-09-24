import { Post, User } from '@prisma/client';

type FirehoseEvent =
  | { type: 'POST_CREATED'; payload: Post }
  | { type: 'USER_INTERACTION'; payload: { action: string; userId: string; postId: string } };

/**
 * Simulates a firehose ingestion service.
 * In a real-world scenario, this would publish events to a message bus
 * like Kafka, RabbitMQ, or a cloud-native service like AWS Kinesis.
 * For now, we'll just log the events to the console.
 */
export const firehose = {
  publish: (event: FirehoseEvent) => {
    console.log('🔥 Firehose Event Published:', JSON.stringify(event, null, 2));
  },
};

// Example usage:
export function publishNewPost(post: Post) {
  firehose.publish({ type: 'POST_CREATED', payload: post });
}

export function publishUserInteraction(action: string, userId: string, postId: string) {
  firehose.publish({
    type: 'USER_INTERACTION',
    payload: { action, userId, postId },
  });
}