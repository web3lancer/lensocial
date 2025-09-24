# lensocial TODO

A living, execution-focused roadmap distilled from RESEARCH.md. Organized by Phases (T = months from now), Epics, Concrete Deliverables, Dependencies, and Explicit Acceptance Criteria (AC). Use this file to plan sprints and track strategic alignment. Update ruthlessly—dead tasks are removed, not archived.

Legend:
- Priority: P0 (existential), P1 (launch-critical), P2 (nice-to-have for alpha), P3 (post-alpha)
- Status: TODO / WIP / DONE / BLOCKED / PARKED
- Owner: (assign explicitly)

---
## Phase Overview (High-Level)
| Phase | Window | Core Goal | Success Signal |
|-------|--------|-----------|----------------|
| Phase 0 | T0–T1 | Technical spike + architecture validation | Firehose + 2 feed generators working on sample data |
| Phase 1 | T1–T3 | MVP + Invite-only Alpha seeding niche | 500 curated users w/ >35% WAU & quality post velocity |
| Phase 2 | T3–T6 | Feedback-driven hardening + WQS + basic marketplace | 3rd-party feed prototypes; retention >50% D7 for cohort |
| Phase 3 | T6–T9 | Growth levers + moderation composability | 5 external labelers; spam <1% surfaced |
| Phase 4 | T9–T12 | Monetization v1 + onboarding polish | 5% Pro conversion in power cohort |

---
## EPIC 1: Core Data & Feed Architecture
Goal: Separate "speech" (content store) from "reach" (pluggable feed logic) early.

### Tasks
1. Content Schema Definition (posts, users, interactions)
   - Priority: P0  Status: TODO
   - AC: ERD + versioned schema; supports text + attachments stub; migration script runs.
2. Firehose Ingestion Service (append-only stream)
   - Priority: P0  Status: TODO
   - AC: Publishes every new post + interaction event (<200ms latency) to internal bus.
3. Feed Generator Interface Contract
   - Priority: P0  Status: TODO
   - AC: Type-safe TS interface + example generator (LatestFeed) returning cursor-paginated results.
4. Relevance Feed Stub (placeholder scoring)
   - Priority: P0  Status: TODO
   - AC: Deterministic sorted list by created_at + simple anti-spam check; no 500s under 1k req/min synthetic load.
5. Feed Selector API + Client Hook
   - Priority: P1  Status: TODO
   - AC: User can toggle between Latest/Relevance; persisted preference.
6. Third-Party Feed Sandbox (internal only)
   - Priority: P1  Status: TODO
   - AC: Runs isolated module (vm / worker) with time + resource limits; logs decisions.
7. Caching Layer Strategy (hot timelines)
   - Priority: P1  Status: TODO
   - AC: Document + implement read-through cache (Redis or in-memory fallback) with invalidation pattern.
8. Pagination + Deterministic Backfill
   - Priority: P1  Status: TODO
   - AC: Forward/back pagination, no dupes, stable under concurrency test.
9. Rate Limiting & Abuse Guards (proto)
   - Priority: P1  Status: TODO
   - AC: Basic per-IP + per-user write throttle; metrics exposed.
10. Feed Metrics Instrumentation
    - Priority: P2  Status: TODO
    - AC: Emit counters: retrieval latency p95, empty-feed ratio, error rate.

Dependencies: Schema before Firehose; Firehose before generators; Selector after at least 2 feeds.

---
## EPIC 2: Interaction & Analytics Signals (WQS Foundations)
Goal: Capture high-fidelity interaction events now so retroactive scoring is possible.

### Tasks
1. Event Taxonomy Spec (share, save, dwell_start/stop, reply_depth)
   - Priority: P0 Status: TODO
   - AC: Markdown spec + version; dev approved.
2. Client Event Dispatcher
   - Priority: P1 Status: TODO
   - AC: Debounced batching; drops <0.1% under offline simulation.
3. Dwell Time Aggregator (sessionize scroll/visibility)
   - Priority: P1 Status: TODO
   - AC: Aggregation job produces per-post dwell_avg & dwell_count.
4. Reply Depth Analyzer (NLP stub)
   - Priority: P2 Status: TODO
   - AC: Placeholder heuristic (token length tiers) persisted.
5. WQS v0 (weights config file)
   - Priority: P2 Status: TODO
   - AC: Weighted score materialized nightly; feed param toggle.
6. Real-Time Signal Queue (for future WQS v1)
   - Priority: P3 Status: TODO
   - AC: Streaming pipeline design doc only (no impl yet).

---
## EPIC 3: Trust & Safety Foundations
Goal: Minimum viable safety net (Tier 1 AI can be stubbed by rules initially).

### Tasks
1. Community Guidelines Draft v1
   - Priority: P0 Status: TODO
   - AC: Public markdown published; legal + internal review done.
2. Report API (posts/users)
   - Priority: P0 Status: TODO
   - AC: POST endpoint; rate-limited; stores reason + category.
3. Basic Spam Heuristics (frequency, hashtag abuse)
   - Priority: P1 Status: TODO
   - AC: Rules flag <1% FP on sample set; metrics dashboard.
4. Trust Score v0 (probation state)
   - Priority: P1 Status: TODO
   - AC: New accounts limited: max 3 posts/day; auto-lift after X positive signals.
5. Moderation Action Log
   - Priority: P1 Status: TODO
   - AC: Append-only log; queryable by admin; immutable ID.
6. Labeling System Design Doc (composable moderation future)
   - Priority: P2 Status: TODO
   - AC: Specifies label taxonomy, subscription model, storage schema.
7. Abuse Review Queue UI (internal)
   - Priority: P2 Status: TODO
   - AC: Simple admin panel to triage reports.

---
## EPIC 4: User Accounts & Profiles
Goal: Lightweight but extensible identity.

### Tasks
1. Auth Provider (email + magic link / OAuth option stub)
   - Priority: P0 Status: TODO
   - AC: Auth flow <3 steps; session refresh; secure cookies.
2. Profile Model (bio, avatar, tags/interests)
   - Priority: P0 Status: TODO
   - AC: Editable; validation; avatar upload to storage stub.
3. Follow System v0
   - Priority: P0 Status: TODO
   - AC: Follow/unfollow; follower counts eventually consistent.
4. Settings Page (feed default, notification prefs placeholder)
   - Priority: P1 Status: TODO
   - AC: Persists preferences; reflects on reload.
5. Lists / Workspaces Spec (future)
   - Priority: P3 Status: TODO
   - AC: Design doc only (no UI yet).

---
## EPIC 5: Posting & Composer
Goal: Fast, frictionless text-first creation.

### Tasks
1. Post Composer v1 (text, length limit, draft state optional)
   - Priority: P0 Status: TODO
   - AC: Sub-200ms client submit; optimistic update.
2. Attachment Stub (image placeholder path)
   - Priority: P1 Status: TODO
   - AC: Single image upload; validation; accessible alt prompt.
3. Edit / Delete Window
   - Priority: P1 Status: TODO
   - AC: Allow edit within 10m; show edited badge.
4. Reply Threading v1
   - Priority: P1 Status: TODO
   - AC: 2-level nesting; load-on-demand deeper replies.
5. Share / Save Buttons (event hooks)
   - Priority: P2 Status: TODO
   - AC: Emits events; UI state toggles.

---
## EPIC 6: Feed Marketplace (Progressive Enablement)
Goal: Start simple; open up after internal stability.

### Tasks
1. Internal Feed Registry Service
   - Priority: P1 Status: TODO
   - AC: CRUD for feed metadata (id, name, description, tags).
2. User Feed Subscriptions Table
   - Priority: P1 Status: TODO
   - AC: Persist chosen feeds; sync to selector menu.
3. Marketplace UI v0 (official feeds only)
   - Priority: P2 Status: TODO
   - AC: Discover + subscribe/unsubscribe flows.
4. Third-Party Feed Submission Workflow (doc + form)
   - Priority: P3 Status: TODO
   - AC: Manual review process defined; security sandbox outline.

---
## EPIC 7: Onboarding Experience
Goal: Teach control + reach aha moment quickly.

### Tasks
1. Onboarding Flow Script (copy + narrative)
   - Priority: P1 Status: TODO
   - AC: Approved microcopy; localization-ready placeholders.
2. Topic Selection Step
   - Priority: P1 Status: TODO
   - AC: Selecting ≥3 topics seeds recommended feed.
3. Recommended Feeds Step
   - Priority: P1 Status: TODO
   - AC: User subscribes to at least 2 feeds before finish.
4. Moderation Default Confirmation
   - Priority: P1 Status: TODO
   - AC: User sees summary; can accept; stored.
5. Contextual Tooltips Framework
   - Priority: P2 Status: TODO
   - AC: Triggered once per feature; persisted dismissed state.

---
## EPIC 8: UX Focus & Cognitive Load Reduction
Goal: Differentiate by intentional attention design.

### Tasks
1. Focus Mode (single-feed distraction filter)
   - Priority: P2 Status: TODO
   - AC: Toggle hides other UI chrome; exits cleanly.
2. Notification Batching Spec
   - Priority: P2 Status: TODO
   - AC: Cron / queue design; digest format sample.
3. Workspaces Concept Doc
   - Priority: P3 Status: TODO
   - AC: Data model + switching UX wireframe.

---
## EPIC 9: Accessibility (Shift Left)
Goal: Bake into core; no retrofits.

### Tasks
1. Accessibility Checklist Adoption
   - Priority: P0 Status: TODO
   - AC: Checklist committed; gating CI lint rule for alt text.
2. Alt Text Prompt in Uploader
   - Priority: P1 Status: TODO
   - AC: Required unless AI suggestion accepted.
3. Color Contrast Token Audit
   - Priority: P1 Status: TODO
   - AC: All tokens pass WCAG AA; documented.
4. Semantic Structure Pass
   - Priority: P2 Status: TODO
   - AC: Landmark roles present; screen reader smoke test script.
5. Emoji Usage Guide (user-facing doc)
   - Priority: P3 Status: TODO
   - AC: Published help center article.

---
## EPIC 10: Community & Curation (Alpha Period)
Goal: High-touch seeding and feedback loops.

### Tasks
1. Beachhead Niche Decision Matrix
   - Priority: P0 Status: TODO
   - AC: Matrix scoring ≥3 candidate niches; rationale logged.
2. VIP Invite List (top 150)
   - Priority: P0 Status: TODO
   - AC: Contact spreadsheet; outreach owner assigned.
3. Manual Onboarding Playbook
   - Priority: P1 Status: TODO
   - AC: Script + email templates + follow-up cadence.
4. Feedback Portal (simple form / board)
   - Priority: P1 Status: TODO
   - AC: Submissions tagged + triage SLA target.
5. Alpha Metrics Dashboard (engagement + quality)
   - Priority: P1 Status: TODO
   - AC: Displays: WAU, posts/day, median replies/post, save/share ratio.
6. Community Leader Identification Criteria
   - Priority: P2 Status: TODO
   - AC: Scoring rules (helpfulness, consistency) documented.

---
## EPIC 11: Monetization Foundations (Design-First)
Goal: Prepare architecture w/o user-facing paywall early.

### Tasks
1. Revenue Model Architecture Doc
   - Priority: P1 Status: TODO
   - AC: Data flows for subscriptions, tipping, storefronts.
2. Payment Provider Evaluation
   - Priority: P2 Status: TODO
   - AC: Compare Stripe vs. alternative; risk matrix.
3. Pro Feature Flag System
   - Priority: P2 Status: TODO
   - AC: Server-enforced; audit log when toggled.
4. Tipping Data Model
   - Priority: P2 Status: TODO
   - AC: Schema + anti-fraud notes; no UI yet.
5. Creator Analytics Spec
   - Priority: P3 Status: TODO
   - AC: Metrics list (saves/share/dwell) mapping.

---
## EPIC 12: AI Enablement (Strategic, Incremental)
Goal: Use AI where leverage is highest: moderation, personalization, assistive UX.

### Tasks
1. Moderation Model Evaluation (open vs hosted)
   - Priority: P1 Status: TODO
   - AC: Latency/cost/precision comparison table.
2. Alt Text Autocomplete Prototype
   - Priority: P2 Status: TODO
   - AC: >70% acceptance rate target in small test.
3. Personalized Feed Training Signals API
   - Priority: P2 Status: TODO
   - AC: Endpoint for thumbs-up/down; stored per user.
4. Summarization Helper (long post preview)
   - Priority: P3 Status: TODO
   - AC: On-demand summary with token limit safeguard.

---
## EPIC 13: Infrastructure & DevOps
Goal: Reliable iterative velocity + observability from day 1.

### Tasks
1. Env Strategy (local/dev/stage)
   - Priority: P0 Status: TODO
   - AC: Docker or Nix config; one-command bootstrap.
2. CI Pipeline (lint, typecheck, tests)
   - Priority: P0 Status: TODO
   - AC: <5m runtime; failing blocks merge.
3. Basic Load Test Script
   - Priority: P1 Status: TODO
   - AC: Simulates 100 concurrent posting users.
4. Observability Stack (logs + metrics)
   - Priority: P1 Status: TODO
   - AC: Central log aggregator + dashboard; p95 feed latency visible.
5. Backup & Recovery Plan
   - Priority: P2 Status: TODO
   - AC: Document RPO <24h, RTO <4h; test run.

---
## EPIC 14: Quality & Testing
Goal: Prevent regression in core differentiators.

### Tasks
1. Testing Pyramid Definition
   - Priority: P0 Status: TODO
   - AC: Agreed ratio unit:integration:e2e; doc in repo.
2. Contract Tests for Feed Interface
   - Priority: P1 Status: TODO
   - AC: Fails if generator violates shape/perf budget.
3. Synthetic Data Seeder
   - Priority: P1 Status: TODO
   - AC: Generates 10k posts + interactions deterministically.
4. Accessibility CI Lint
   - Priority: P2 Status: TODO
   - AC: Blocks PR if image lacks alt.
5. Performance Budget (client)
   - Priority: P2 Status: TODO
   - AC: First contentful interaction <2.5s on mid-tier device.

---
## EPIC 15: Risk Register (Active Mitigation)
| Risk | Likelihood | Impact | Mitigation Task Ref |
|------|------------|--------|--------------------|
| Feed relevance underwhelms early | Med | High | EPIC 2: Capture signals early; WQS iteration cadence |
| Spam bursts in alpha | Med | High | EPIC 3: Trust Score v0 + heuristics |
| Niche selection misaligned | Med | High | EPIC 10: Decision Matrix + validation interviews |
| Performance regressions | Med | Med | EPIC 14: Perf budget + synthetic load tests |
| Over-building pre-feedback | High | High | Strict MVP scope (EPIC 1/4/5 only for alpha) |
| Accessibility slips | Low | High | EPIC 9 gating CI rules |
| Monetization distracts too early | Med | Med | Monetization docs only until Phase 4 |
| Third-party feed security | Low | High | EPIC 6 sandbox design before opening submissions |

---
## Metrics (Define Early)
- Core Activation: User subscribes to ≥2 feeds + makes 1 post + saves or shares 1 item within first 72h.
- Quality Signal Ratio: (Shares + Saves) / Total Posts (target >0.25 early niche).
- Meritocracy Indicator: % of surfaced top-100 daily posts from accounts <90th percentile follower count (target >60%).
- Safety: Spam/abuse reports accepted per 1k posts (<5 initially, trend downward).
- Retention: D7 >40%, D30 >25% for beachhead niche.

---
## Sprint Cadence Suggestions
- 2-week sprints; each ends with: Demo (feed integrity), Quality Review (accessibility + perf), Community Touchpoint Summary.
- Post-sprint backlog grooming prunes any task idle >2 sprints.

---
## Immediate Next (Week 0–1) Shortlist
1. EPIC 10: Beachhead Niche Decision Matrix (P0)
2. EPIC 1: Content Schema + Firehose spike (P0)
3. EPIC 2: Event Taxonomy Spec (P0)
4. EPIC 3: Community Guidelines Draft (P0)
5. EPIC 9: Accessibility Checklist commit (P0)
6. EPIC 13: Env bootstrap + CI pipeline (P0)

Keep this list under active revision.

---
## Updating This File
- Remove (not strike) obsolete tasks.
- Add date stamp in commit messages for major structural changes.
- Reflect real status weekly.

---
(End of TODO — iterate aggressively.)
