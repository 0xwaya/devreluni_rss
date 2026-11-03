# SECURITY_NOTES.md — devreluni_rss

Date: 2026-11-03 (America/New_York)

## Current security posture
- Static documentation site (Next.js + Nextra) with no backend auth/session flow in this repo.
- Primary risks are supply-chain/dependency vulnerabilities and repo hygiene issues.
- Runtime is pinned to Next.js 16.4.5 (includes the image-optimization RCE fixes and the 2026-11-03 advisories) and `sharp` 0.35.5.
- Nextra 4 (App Router) is required for that Next.js line. Pages Router content lives in `content/`.
- One lockfile only: `package-lock.json`. `yarn.lock` and `pnpm-lock.yaml` were removed so Dependabot does not keep alerting on stale manifests.

## Recommendations

1. **Dependency risk management (High)**
   - Run `npm audit` in CI and triage high/critical issues.
   - Keep Dependabot/Renovate PRs merging onto this single npm lockfile.
   - Prefer pinned versions for `next`, `react`, and `sharp`.

2. **Build pipeline hardening (Medium)**
   - Use lockfile integrity checks in CI (`npm ci` only).
   - Fail CI on dependency drift or missing lock updates.

3. **Content trust and link safety (Medium)**
   - Validate outbound links in docs periodically.
   - Add markdown/link checker in CI to catch stale or broken resources.

4. **Repository hygiene (Low/Medium)**
   - Keep OS artifacts (`.DS_Store`) ignored.
   - Ensure no secrets/tokens are committed in docs/examples.

## Solidity / Cyfrin notes
- No Solidity code detected in this repository.
- If contracts are later added, apply Cyfrin-aligned controls: CEI pattern, access control, fuzz/invariant tests, and explicit threat modeling.
