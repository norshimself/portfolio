---
title: "Yuugen — Discord Music & Server Dashboard"
description: "Discord-oriented music control and server dashboard with a NestJS bot backend and a Next.js interface."
date: "2026-10-18"
tags: ["Community","Discord","Music"]
stack: ["NestJS","Discord.js","Lavalink","Next.js","PostgreSQL"]
cover: "/assets/images/projects/yuugen.svg"
repository: "https://github.com/norshimself/Yuugen"
demo: "https://yuugen-flax.vercel.app"
order: 3
published: true
featured: false
---

## Overview

Yuugen connects a Discord bot and a web dashboard for server-specific music controls and configuration. It combines real-time bot interactions with a browser-based administrative experience.

## What the project includes

- A Discord-aware backend organized around player, authentication, and server modules.
- A Next.js dashboard for selecting servers and using music controls.
- Configuration interfaces for guild settings, alongside modules for games and server economy.

## Technical approach

The backend uses NestJS, Discord.js, and a Lavalink integration for audio-related functionality, with PostgreSQL through TypeORM. A Next.js frontend provides the dashboard and authenticated views.

## Scope and status

The dashboard's music area is the clearest active surface. Some economy, games, and settings navigation elements are currently marked as disabled, so those parts should be treated as work in progress.
