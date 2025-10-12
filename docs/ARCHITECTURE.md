# Technical Architecture

## System Overview

Lensocial is built as a modern, scalable social media platform using Next.js 15 with AI and Web3 integration.

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  (Next.js App Router + React Components + Framer Motion)    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│              (Server Actions + API Routes)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
        ┌──────────────────┐  ┌──────────────────┐
        │   AI Services    │  │  Web3 Services   │
        │  (Google Gemini) │  │  (Wallet/NFT)    │
        └──────────────────┘  └──────────────────┘
                    │                   │
                    └─────────┬─────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       Data Layer                             │
│        (Future: PostgreSQL + Redis + IPFS/Arweave)          │
└─────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Frontend Architecture

#### Page Structure
```
src/app/
├── page.tsx              # Home feed (personalized)
├── search/page.tsx       # Search & discovery
├── connections/page.tsx  # Network suggestions
├── web3/page.tsx        # Web3 features & communities
├── analytics/page.tsx   # Performance dashboard
└── profile/page.tsx     # User profile
```

#### Component Organization
```
src/components/
├── feed/                # Feed-related components
│   ├── create-post.tsx
│   ├── feed-view.tsx
│   └── post-card.tsx
├── web3/                # Web3 features
│   └── wallet-connect.tsx
├── community/           # Community features
│   └── communities-panel.tsx
├── search/             # Search features
│   └── search-panel.tsx
├── layout/             # Layout components
│   └── app-layout.tsx
└── ui/                 # Reusable UI components
    └── (shadcn/ui components)
```

### 2. AI Integration Layer

#### AI Flows Architecture
```typescript
// Each AI flow follows this pattern:
┌─────────────────┐
│   Input Schema  │ → Zod validation
└────────┬────────┘
         ▼
┌─────────────────┐
│     Prompt      │ → Structured prompt with context
└────────┬────────┘
         ▼
┌─────────────────┐
│  Gemini Model   │ → AI inference
└────────┬────────┘
         ▼
┌─────────────────┐
│  Output Schema  │ → Validated response
└─────────────────┘
```

#### AI Flow Modules

**1. Content Moderation** (`moderate-content.ts`)
- Input: Content text, author info, context
- Processing: Multi-category toxicity analysis
- Output: Safety scores, confidence, recommendation
- Categories: Spam, harassment, hate speech, adult content, violence, misinformation

**2. Content Summarization** (`summarize-content.ts`)
- Input: Long-form content, max length
- Processing: Key extraction, topic identification
- Output: Summary, key points, topics, sentiment

**3. Alt Text Generation** (`generate-alt-text.ts`)
- Input: Image description, post context
- Processing: Accessibility-focused description
- Output: Concise alt text, detailed description, tags

**4. Personalized Feed** (`personalized-feed.ts`)
- Input: User profile, activity, available content
- Processing: Relevance scoring
- Output: Ranked feed items with scores

**5. Connection Suggestions** (`suggest-connections.ts`)
- Input: User profile, activity history
- Processing: Professional matching
- Output: User and community suggestions with reasons

### 3. Data Models

#### Entity Relationship

```
User ──────┬─────── Post
           │         │
           │         ├─── Interaction (likes, saves, shares)
           │         └─── Moderation (reports, AI results)
           │
           ├─────── CommunityMembership
           │         │
           │         └─── Community
           │
           ├─────── WalletConnection
           │         │
           │         └─── Web3 (NFTs, DIDs)
           │
           └─────── TrustScore
```

#### Key Models

**User Model**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  walletAddress?: string;        // Web3 integration
  trustScore?: number;           // Moderation system
  verified?: boolean;            // Platform verification
  isNFTAvatar?: boolean;        // NFT profile pic
  // ... additional fields
}
```

**Post Model**
```typescript
interface Post {
  id: string;
  content: string;
  author: User;
  likes?: number;
  shares?: number;
  saves?: number;                // Quality signal
  views?: number;
  moderationStatus?: string;     // Safety check
  isNFT?: boolean;              // Web3 content
  aiSummary?: string;           // AI enhancement
  // ... additional fields
}
```

### 4. Web3 Integration

#### Wallet Connection Flow
```
User Action → Connect Wallet Button
              ↓
         Wallet Provider Detection
              ↓
         Request Connection
              ↓
         Sign Message for Verification
              ↓
         Store Address + Link to Account
              ↓
         Enable Web3 Features
```

#### Supported Features
- Wallet authentication (MetaMask, WalletConnect, Coinbase)
- NFT profile pictures
- Post minting as NFTs
- Cross-chain support
- Decentralized identity (DID)

### 5. Quality & Trust System

#### Weighted Quality Score (WQS)
```
WQS = w1*likes + w2*saves + w3*shares + w4*comments + w5*dwell_time
```

Where weights prioritize high-intent actions:
- Saves (w2) > Shares (w3) > Likes (w1)
- Comments quality matters (depth, length)
- Dwell time indicates genuine interest

#### Trust Score Calculation
```
Trust Score = f(
  account_age,
  verification_status,
  positive_interactions,
  report_count,
  content_quality_avg
)
```

### 6. Moderation Pipeline

```
Content Creation
    ↓
AI Pre-screening (immediate)
    ↓
┌───────────────────────┐
│ Safe? → Publish       │
│ Unsafe? → Block       │
│ Uncertain? → Review   │
└───────────────────────┘
    ↓
Human Review (if needed)
    ↓
Final Decision + Appeal Option
```

### 7. Performance Optimizations

#### Static Generation
- Homepage pre-rendered
- Community pages cached
- Profile pages ISR (Incremental Static Regeneration)

#### Code Splitting
- Route-based splitting (automatic in Next.js)
- Component lazy loading for heavy features
- Dynamic imports for modals/dialogs

#### Image Optimization
- Next.js Image component
- Automatic WebP conversion
- Responsive image sizing
- Lazy loading by default

### 8. Security Architecture

#### Authentication Flow (Future)
```
User Login → Email/Wallet Verification
           ↓
      Generate JWT Token
           ↓
      Store in HttpOnly Cookie
           ↓
      Validate on Each Request
```

#### Content Security
- Input sanitization for all user content
- XSS prevention
- CSRF tokens for mutations
- Rate limiting per user/IP

### 9. Scalability Considerations

#### Horizontal Scaling
- Stateless server design
- Session storage in Redis
- Database read replicas
- CDN for static assets

#### Caching Strategy
```
Level 1: Browser Cache (static assets)
Level 2: CDN Cache (images, JS, CSS)
Level 3: Redis Cache (hot data, sessions)
Level 4: Database (source of truth)
```

#### Database Indexing
```sql
-- Example indexes for performance
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
CREATE INDEX idx_interactions_post ON interactions(post_id, type);
CREATE INDEX idx_communities_tags ON communities USING GIN(tags);
```

### 10. Monitoring & Observability

#### Metrics to Track
- API response times (p50, p95, p99)
- AI inference latency
- Error rates by endpoint
- User engagement metrics
- Content quality scores
- Moderation accuracy

#### Logging Strategy
- Structured JSON logs
- Log levels: ERROR, WARN, INFO, DEBUG
- Request tracing with correlation IDs
- AI decision logging for audit

### 11. Technology Stack

```yaml
Frontend:
  - Framework: Next.js 15
  - Language: TypeScript
  - Styling: Tailwind CSS
  - UI Components: Radix UI
  - Animations: Framer Motion
  - Icons: Lucide React

Backend:
  - Runtime: Node.js
  - Framework: Next.js API Routes
  - AI: Google Gemkit + Gemini
  - Future DB: PostgreSQL + Prisma

Web3:
  - Libraries: (Future) ethers.js, wagmi
  - Networks: Ethereum, Polygon, Base, Optimism, Arbitrum

DevOps:
  - Hosting: (Future) Vercel/Firebase
  - CI/CD: GitHub Actions
  - Monitoring: (Future) Datadog/New Relic
```

### 12. API Design Patterns

#### Server Actions
```typescript
// Pattern for data mutations
'use server';

export async function actionName(input: InputType): Promise<OutputType> {
  // 1. Validate input
  // 2. Check authorization
  // 3. Process action
  // 4. Return result
}
```

#### Error Handling
```typescript
try {
  const result = await aiFlow(input);
  return result;
} catch (error) {
  console.error('Error:', error);
  // Return safe fallback
  return defaultValue;
}
```

### 13. Future Enhancements

#### Phase 2 Architecture
- WebSocket server for real-time updates
- Message queue (Redis/RabbitMQ) for async processing
- Background job processing (Bull, BullMQ)
- Full-text search engine (Elasticsearch)

#### Phase 3 Architecture
- Microservices for AI processing
- GraphQL API for flexible queries
- Event sourcing for audit trail
- Multi-region deployment

---

**Version**: 1.0.0
**Last Updated**: October 2025
**Status**: Production-ready architecture
