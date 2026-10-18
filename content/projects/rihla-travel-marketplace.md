---
title: "Rihla — Travel Experiences Marketplace"
description: "Morocco-first travel marketplace concept connecting travelers, local agencies, and curated itinerary bookings."
date: "2026-10-18"
tags: ["Platforms","Travel","Marketplace"]
stack: ["NestJS","Next.js","PostgreSQL","Drizzle","Stripe Connect"]
cover: "/assets/images/projects/rihla-travel-marketplace.svg"
order: 10
published: true
featured: false
---

## Overview

Rihla is designed as a marketplace where travelers can discover curated itineraries and agencies can manage their offerings. The application separates traveler, agency, and administrator workflows.

## What the project includes

- Multi-role flows for travelers, agencies, and platform administrators.
- Trip discovery and booking journeys, with agency review and approval concepts.
- A payment design based on Stripe Connect and a multilingual interface.

## Technical approach

The monorepo includes a Next.js application and NestJS REST API backed by PostgreSQL and Drizzle ORM. Supporting services include Redis, MinIO-compatible media storage, and payment infrastructure.

## Scope and status

The README documents an escrow-style marketplace and moderation workflow. These are architectural/product aims, not independently verified financial or operational outcomes.
