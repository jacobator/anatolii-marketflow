---
title: "Getting Started with the API"
---

# Getting Started with the API

## Introduction

The Online Marketplace API allows you to integrate your inventory and order management systems directly with our platform. Whether you are building a custom storefront or automating your fulfillment workflow, our API provides the tools you need to manage products and orders at scale.

## Base URL

All API requests are made to the following base URL:

```bash
https://api.marketplace.example.com/v1
```

{% admonition type="info" %}
All endpoints require authentication using a Bearer token. See [Authentication](/docs/api/authentication) for details.
{% /admonition %}

## Your First Request

To verify your connection, you can list all active products. This example uses `curl` to fetch the first few items from the catalog.

```bash
curl -X GET "https://api.marketplace.example.com/v1/products" \
     -H "Authorization: Bearer YOUR_API_KEY"
```

A successful response returns a JSON object containing a list of products:

```json
{
  "products": [
    {
      "id": "prod_123",
      "name": "Vintage Camera",
      "price": 299.00,
      "stock": 5
    },
    // ...
  ]
}
```

## Next Steps

Once you have successfully made your first request, explore the following guides to dive deeper into the API:

- [Authentication](/docs/api/authentication) — Learn how to secure your requests.
- [Product Management](/docs/api/products) — Create and update your product listings.
- [Order Processing](/docs/api/orders) — Manage the lifecycle of customer orders.
