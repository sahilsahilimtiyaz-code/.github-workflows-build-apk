## 2024-05-24 - O(N²) DOM Rebuilds in AI Streaming
**Learning:** In streaming chat interfaces, blindly parsing and replacing the entire message DOM on every received chunk results in an O(N²) operation that blocks the main thread and causes severe layout thrashing.
**Action:** Always throttle UI rendering during active streaming (e.g., to ~50ms intervals) to prevent main thread freezing, or use incremental DOM updates.
