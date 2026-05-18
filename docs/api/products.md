---
title: Product Management
---

# Product Management

The Products API allows you to programmatically manage your marketplace inventory. You can list existing products, create new listings, and keep stock levels synchronized with your external systems.

## Listing Products

To retrieve a list of your products, use the `GET /v1/products` endpoint. This returns a paginated list of items currently in your catalog.

```json
{
  "products": [
    {
      "id": "prod_732",
      "name": "Wireless Headphones",
      "price": 89.99,
      "stock": 15
    }
  ],
  "total": 1
}
```

## Creating a New Listing

When adding a product, you provide the essential details such as name, price, and initial stock level. The system generates a unique ID for each new item.

```bash
curl -X POST https://api.marketplace.com/v1/products \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mechanical Keyboard",
    "description": "RGB backlit mechanical keyboard with blue switches.",
    "price": 59.99,
    "stock": 50
  }'
```

## Updating Inventory

Keeping stock accurate is critical for preventing overselling. You can update the `stock` level for a specific product using a `PATCH` request.

```bash
curl -X PATCH https://api.marketplace.com/v1/products/prod_732 \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "stock": 12
  }'
```

After updating, the API returns the updated product object confirming the new stock count.
