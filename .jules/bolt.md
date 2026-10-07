## 2023-10-24 - Overlapping Cache Configuration in GitHub Actions
**Learning:** In GitHub Actions workflows for Gradle projects, using `actions/setup-java` with `cache: gradle` alongside `gradle/actions/setup-gradle` can lead to overlapping cache management and sub-optimal performance or corruption. The `setup-gradle` action provides superior native caching.
**Action:** Always prefer `gradle/actions/setup-gradle` for caching over the generic `setup-java` configuration, and explicitly ensure they are not fighting each other.
