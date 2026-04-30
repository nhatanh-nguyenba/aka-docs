# Akabot Documentation Content

This repository holds the markdown content for the Akabot documentation site
([https://docs.akabot.com:8081](https://docs.akabot.com:8081)). Site code, build
configuration, and styling live in a separate internal repository — you don't
need access to it.

## How to contribute

1. Fork or clone this repo and create a branch.
2. Edit or add markdown files (see [Folder layout](#folder-layout)).
3. Open a pull request to `main`.
4. Once a maintainer reviews and merges, the site rebuilds automatically.
   Your changes are typically live within ~5 minutes.

## Folder layout

```text
docs/
  <module>/
    latest/              ← unreleased / next version
      overview.md
      ...
    <version>/           ← released snapshot, e.g. 2.0
      overview.md
      ...
  activities/
    <package>/           ← e.g. core, common, window
      latest/
        introduction.md
        ...
      <version>/
        introduction.md
        ...

i18n/vi/                 ← Vietnamese mirror of docs/
  <module>/
    latest/
    <version>/
  activities/
    <package>/
      latest/
      <version>/
```

### Modules

| Folder | Product |
|---|---|
| `docs/center/` | Akabot Center |
| `docs/studio/` | Akabot Studio |
| `docs/agent/` | Akabot Agent |
| `docs/data-service/` | Data Service |
| `docs/vision/` | Akabot Vision |
| `docs/insight/` | Akabot Insight |
| `docs/hub/` | Akabot Hub |
| `docs/integration-service/` | Integration Service |
| `docs/activities/<package>/` | An activity package (Core, Window, Excel, …) |

New activity packages and new versions can be added in this repo without any
maintainer action. New top-level modules require a config change in the build
repo — ask a maintainer.

## Tasks

### Add or update a doc page

1. Add or edit the file under `docs/<module>/latest/<file>.md`.
2. Mirror the change in `i18n/vi/<module>/latest/<file>.md` for Vietnamese.
3. Commit, push, open a PR.

If you don't know Vietnamese, leave the VI file out — readers on the VI site
fall back to the English version. A translator can add the VI page later.

### Add a new version snapshot

When a release is ready to be frozen as version `2.0` (for example):

1. Copy the entire `docs/<module>/latest/` folder to `docs/<module>/2.0/`.
2. Copy `i18n/vi/<module>/latest/` to `i18n/vi/<module>/2.0/` (if VI exists).
3. Continue evolving `latest/` — it represents the *next* release.
4. Commit, PR, merge.

The site's version selector picks up `2.0` automatically. **No CLI commands.**

### Add a new activity package

1. Create `docs/activities/<new-package>/latest/` and add at least one MD file
   (typically `introduction.md` and `release-notes.md`).
2. Mirror in `i18n/vi/activities/<new-package>/latest/` for VI.
3. Commit, PR, merge.

The site's package list and search index pick it up automatically.

### Editing a frozen version

Frozen versions (`2.0/`, `1.5/`, etc.) should only receive **typo fixes** and
**factual corrections**. Structural changes, new pages, and reorganisations go
in `latest/` and become part of the next snapshot.

## Markdown frontmatter

Every page should start with frontmatter. Common keys:

```yaml
---
title: Page Title
sidebar_label: Short Label In Sidebar
sidebar_position: 2
displayed_sidebar: centerSidebar   # only if you need a non-default sidebar
---
```

The `displayed_sidebar` value matches the module folder (e.g. `centerSidebar`,
`studioSidebar`, `activitiesSidebar` for activity packages). See existing
files in any module for examples.

## Translation rules

- `latest/` is the source of truth for the next release. English is canonical;
  Vietnamese should track it.
- Frozen folders are immutable except for typo fixes.
- Missing Vietnamese files fall back to English on the VI site — preferable to
  shipping bad machine-translated text.

## Local preview

Building the site requires the internal build repository. Most contributors
rely on the deployed site after merge. If you need a local preview, ask a
maintainer.

## Process diagram

```text
  PR opened          merged to main
       |                    |
       v                    v
   review by  ───────►  GitHub Action in this repo fires
   maintainer            (notify build repo)
                                |
                                v
                      build repo: pull, build, push image, ssh deploy
                                |
                                v
                         docs.akabot.com:8081 updated (~5 min)
```
