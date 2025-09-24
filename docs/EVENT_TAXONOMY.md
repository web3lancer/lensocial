# Event Taxonomy v1.0

This document specifies the taxonomy for user interaction events that will be tracked throughout the platform. Capturing these events is critical for building analytics, personalized feeds, and other data-driven features.

## Event Structure

All events should conform to a common structure:

```json
{
  "eventName": "string",
  "eventVersion": "string",
  "timestamp": "ISO8601Date",
  "userId": "string",
  "payload": {
    // Event-specific data
  }
}
```

## Core Events

### Content Events

- **`POST_CREATED`**: Fired when a user successfully creates a new post.
  - `payload`: `{ "postId": "string", "content": "string", "hasImage": "boolean", "hasVideo": "boolean" }`
- **`POST_DELETED`**: Fired when a user deletes their own post.
  - `payload`: `{ "postId": "string" }`
- **`POST_EDITED`**: Fired when a user edits their own post.
  - `payload`: `{ "postId": "string", "oldContent": "string", "newContent": "string" }`

### Interaction Events

- **`LIKE_GIVEN`**: Fired when a user likes a post.
  - `payload`: `{ "postId": "string", "authorId": "string" }`
- **`LIKE_REMOVED`**: Fired when a user removes their like from a post.
  - `payload`: `{ "postId": "string", "authorId": "string" }`
- **`COMMENT_ADDED`**: Fired when a user adds a comment to a post.
  - `payload`: `{ "postId": "string", "commentId": "string", "authorId": "string" }`
- **`SHARE`**: Fired when a user shares a post.
  - `payload`: `{ "postId": "string", "platform": "string" }` // e.g., 'internal', 'twitter', 'link'
- **`SAVE`**: Fired when a user saves a post to their private list.
  - `payload`: `{ "postId": "string" }`

### Engagement & Quality Signals

- **`DWELL_START`**: Fired when a post enters the viewport.
  - `payload`: `{ "postId": "string" }`
- **`DWELL_STOP`**: Fired when a post leaves the viewport.
  - `payload`: `{ "postId": "string", "durationMs": "number" }`
- **`REPLY_DEPTH_REACHED`**: Fired when a user expands a comment thread to a certain depth.
  - `payload`: `{ "postId": "string", "depth": "number" }`

### Profile Events

- **`FOLLOW`**: Fired when a user follows another user.
  - `payload`: `{ "followedUserId": "string" }`
- **`UNFOLLOW`**: Fired when a user unfollows another user.
  - `payload`: `{ "unfollowedUserId": "string" }`
- **`PROFILE_UPDATED`**: Fired when a user updates their profile.
  - `payload`: `{ "fieldsChanged": ["string"] }` // e.g., 'bio', 'avatar'