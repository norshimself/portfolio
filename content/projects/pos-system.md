---
title: "POS System — Retail Microservices"
description: "Retail point-of-sale system organized into NestJS microservices with separate business domains and a Next.js frontend."
date: "2026-10-18"
tags: ["Platforms","Point of Sale","Microservices"]
stack: ["NestJS","Next.js","PostgreSQL","Docker"]
cover: "/assets/images/projects/pos-system.svg"
order: 6
published: true
featured: true
---

## Overview

POS System is a retail software architecture that separates key domains into backend services. It explores how a point-of-sale application can coordinate user access, products, warehouse stock, checkout, and invoicing.

## What the project includes

- Authentication, user, product, inventory-lot, and warehouse-oriented services.
- Dedicated modules for cash registers, invoices, retail operations, and customer or supplier records.
- A Next.js client to interact with the service-oriented backend.

## Technical approach

NestJS microservices communicate over TCP, with PostgreSQL for persistence and Docker Compose for local orchestration. The repository documents separate databases for multiple business domains.

## Scope and status

The repository is a software project rather than a verified production deployment. This overview describes the documented service boundaries and technology choices without claiming commercial usage.
