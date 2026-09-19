# HP deployment policy

The GitHub `main` branch is the only production source for `fshika.com`.

## GitHub protection

The `main` branch is protected with these repository rules:

- Changes must arrive through a pull request.
- The GitHub Actions `validate` check must pass against the latest `main`.
- Administrators are included in the rule.
- Review conversations must be resolved.
- Force pushes and branch deletion are disabled.

Use a `codex/` branch for automated maintenance and a short descriptive branch
name for other reviewed work.

## Cloudflare Pages settings

- Repository: `ugmn29/dentalHP`
- Production branch: `main`
- Root directory: repository root
- Build command: `npm --prefix fuku-dental ci && npm --prefix fuku-dental run build`
- Build output directory: `fuku-dental/out`
- Preview deployments: enabled for non-production branches

## Release flow

1. Create a branch from the latest `main`.
2. Commit every intended HP change to that branch.
3. Push the branch and confirm the GitHub build check passes.
4. Review the Cloudflare preview on desktop and mobile.
5. Merge the reviewed commit into `main` to publish it.
6. Confirm `https://fshika.com/deployment.json` reports the deployed `main` commit.
7. Confirm the booking and phone links on the affected pages.

Do not run a direct production deployment from a local `out` directory. A local
working tree can be newer than GitHub, which lets a later webhook redeploy an
older version of the HP.

## microCMS safety

Keep the microCMS deployment webhook paused until `main`, the Cloudflare
production deployment, and `deployment.json` all report the same commit. After
re-enabling it, perform one test publication and verify that only blog content
changes.

The webhook only starts a Cloudflare build. It must always clone the latest
GitHub `main`; microCMS is not a source of HP code. After each publication,
check that the Cloudflare deployment commit still matches `main`.

## Routine verification

```bash
git fetch origin
git rev-parse origin/main
curl -fsS https://fshika.com/deployment.json
```

The two commit values must match. Also confirm the changed page, `/blog`, and
one non-blog page with a cache-busting query string.

## Recovery

If production does not match `main`, stop webhook-triggered deployments, identify
the last approved commit in Cloudflare, and redeploy that commit through the
GitHub integration. Do not repair production with an uncommitted local build.

Record the incident time, unexpected commit, restored commit, cause, and
preventive action in the marketing operations folder.
