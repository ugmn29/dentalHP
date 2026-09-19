# HP deployment policy

The GitHub `main` branch is the only production source for `fshika.com`.

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

Do not run a direct production deployment from a local `out` directory. A local
working tree can be newer than GitHub, which lets a later webhook redeploy an
older version of the HP.

## microCMS safety

Keep the microCMS deployment webhook paused until `main`, the Cloudflare
production deployment, and `deployment.json` all report the same commit. After
re-enabling it, perform one test publication and verify that only blog content
changes.

## Recovery

If production does not match `main`, stop webhook-triggered deployments, identify
the last approved commit in Cloudflare, and redeploy that commit through the
GitHub integration. Do not repair production with an uncommitted local build.
