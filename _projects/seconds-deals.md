---
layout: project
title: "Seconds Deals"
subtitle: "High-Volume E-Commerce Platform & Custom Logistics Engine"
slug: "seconds-deals"
category: "E-Commerce"
role: "Backend Developer"
team_size: "7 members"
timeline: "2023"
featured: true
order: 2
stack:
  - "Magento 2"
  - "PHP"
  - "MySQL"
  - "KnockoutJS"
  - "Logistics APIs"
  - "Cron Automation"
meta_description: "Case study on engineering a dynamic third-party shipping calculation module and automated order state management system for Seconds Deals e-commerce platform."
---

## 1. Project Overview

Seconds Deals is a fast-paced retail e-commerce platform specializing in flash promotions, limited-time consumer deals, and high-turnover inventory. Because products varied drastically in weight, dimensions, and fulfillment warehouses, standard flat-rate or simple table-rate shipping was inadequate for business margins.

Working in an agile engineering team of 7, I operated as a Backend Developer with primary ownership of shipping carrier calculation logic, automated fulfillment state transitions, and checkout integration.

---

## 2. Business Problem & Engineering Context

The platform experienced friction in customer fulfillment and margin preservation:

- **Dynamic Logistics Costing**: Static shipping rates either overcharged customers—causing checkout drop-off—or undercharged them on oversized parcels, diminishing profit margins.
- **Third-Party Carrier Integration**: The business partnered with regional courier services that provided API endpoints for quote calculation, but these services lacked official Magento modules.
- **Manual Fulfillment Overload**: Customer service and warehouse personnel were manually inspecting tracking numbers and updating order statuses in the Magento admin panel, creating fulfillment bottlenecks.
- **Checkout Latency**: Calling external carrier APIs during customer checkout risked freezing the payment page if the external carrier network delayed its response.

---

## 3. Role & Responsibilities

My primary engineering responsibilities included:

- **Custom Shipping Carrier Module**: Architecting and developing a native Magento 2 shipping carrier module compliant with the `Magento\Shipping\Model\Carrier\AbstractCarrier` interface.
- **Dynamic Rate Calculation**: Constructing algorithmic rating logic based on cart item volumetric weights, origin warehouse zip codes, and destination delivery zones.
- **Automated Order State Transitions**: Implementing scheduled background cron jobs to ingest courier delivery telemetry and advance order statuses automatically (`Processing` -> `Shipped` -> `Completed`).
- **Checkout UI Synchronization**: Collaborating with frontend engineers to integrate custom shipping rate selection with KnockoutJS checkout observable components.
- **Defect Resolution**: Investigating and resolving edge-case shipping pricing bugs during quality control (QC) and staging cycles.

---

## 4. Technical Stack

| Component | Technology |
| :--- | :--- |
| **Platform** | Magento 2 (Open Source) |
| **Backend Language** | PHP 7.4 / 8.0 (Object-Oriented, Dependency Injection) |
| **Frontend Integration** | KnockoutJS (Magento UI Components), RequireJS, JavaScript |
| **Database** | MySQL |
| **Automation** | Magento Crontab, CLI commands |
| **External Services** | Third-party Logistics Provider REST APIs |

---

## 5. Architecture & System Integrations

The carrier calculation and order transition architecture was structured as follows:

```
[ Checkout Cart ]
       |
       v
[ Custom Shipping Carrier Model ] ---> [ In-Memory / Transient Cache ]
       |                                              |
       | (Cache Miss)                                 | (Cache Hit)
       v                                              |
[ External Carrier Gateway API ]                      |
       |                                              |
       v                                              v
[ Rate Normalization Engine ] <-----------------------+
       |
       v
[ KnockoutJS Checkout Rate Grid ]
```

### Fulfillment State Machine:
```
[ Order Placed ] 
       |
       v
[ State: Processing ] ---> [ Carrier Manifest Dispatched ]
                                      |
                                      v (Async Polling Worker)
[ State: Completed / Delivered ] <--- [ Courier API State: In Transit / Delivered ]
```

---

## 6. Technical Challenges

1. **Carrier API Availability & Timeouts**: If the third-party logistics API experienced high latency, checkout requests could hang, frustrating buyers and spiking abandoned carts.
2. **Volumetric Weight Complexities**: Calculating consolidated dimensional weight for orders containing mixed items (e.g., lightweight fragile goods packaged with dense products) required precise algorithms.
3. **Cart Modification Invalidation**: Modifying item quantities or entering different postal codes in the checkout flow required seamless recalculation without redundant network requests or stale cache reads.

---

## 7. Solutions & Engineering Decisions

### Resilient Carrier Gateway Client
- Implemented strict HTTP client timeout limits (3 seconds maximum) for external carrier requests.
- Developed a rule-based fallback mechanism: if the carrier API timed out, the system fell back to a calibrated backup rate table based on product category weight bands, ensuring the customer could complete their purchase uninterrupted.

### Intelligent Rate Caching
- Created a hashing algorithm based on `md5(cart_items_hash + destination_zip)` to cache shipping quotes for 15 minutes during the checkout session.
- Prevented duplicate API calls when customers navigated back and forth between shipping and payment checkout steps.

### Automated Order Pipeline
- Developed an asynchronous cron worker that queried the third-party logistics status API in batches of 50 active tracking identifiers.
- Automatically transitioned order states, generated invoice documents, and triggered customer notification emails upon verified parcel delivery without manual administrative intervention.

---

## 8. Outcomes & Lessons Learned

### Key Outcomes:
- **Accurate Fulfillment Margins**: Real-time calculated shipping rates accurately reflected actual courier costs, eliminating shipping margin deficits on heavy parcels.
- **Streamlined Operations**: Replaced manual order status administration with automated background transitions, reducing fulfillment cycle time.
- **Robust Checkout Reliability**: The fallback rating architecture ensured 100% checkout uptime even during third-party carrier network degradation.

### Lessons Learned:
- *Resilience at the Boundary*: Any external dependency placed in the synchronous checkout path must have a fallback policy and strict timeout controls.
- *State Automation Requires Idempotency*: Background polling workers must always verify current database records before applying state transitions to prevent race conditions or duplicate customer notification emails.
