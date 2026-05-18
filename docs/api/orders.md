---
title: Order Processing
---

# Order Processing

Managing the lifecycle of an order is critical for maintaining high seller ratings and ensuring buyer satisfaction. The Online Marketplace API provides endpoints to track, update, and resolve orders from the moment they are placed until they reach the customer's doorstep.

## The Order Lifecycle

Every order moves through a standard set of statuses:

- **Pending:** The order has been placed and payment is being processed.
- **Fulfilled:** The seller has packaged the item and provided shipping information.
- **Delivered:** The carrier has confirmed successful delivery to the buyer.

## Fetching Orders

To view your recent sales or check the status of a specific purchase, use the orders list endpoint. You can filter by status or date range to manage your workflow effectively.

```bash
curl -X GET "https://api.marketplace.com/v1/orders?status=pending" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

The response returns a list of order objects including the buyer information, shipping address, and line items.

## Fulfilling an Order

Once you have prepared a shipment, you must mark the order as fulfilled. This notifies the buyer and triggers the release of funds to your account.

```bash
curl -X POST "https://api.marketplace.com/v1/orders/ord_12345/fulfill" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "tracking_number": "TRK789012345",
    "carrier": "FedEx"
  }'
```

After fulfillment, the order status transitions to `fulfilled`.

## Refunds and Disputes

If a buyer requests a return or an item is out of stock, you can issue a refund via the API. Managing disputes promptly helps maintain your seller reputation.

To issue a full refund, send a request to the refund endpoint:

```bash
curl -X POST "https://api.marketplace.com/v1/orders/ord_12345/refund" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "reason": "out_of_stock"
  }'
```

For complex disputes or partial refunds, we recommend using the [Seller Dashboard](/docs/ui/seller-dashboard) for a more granular view of the transaction history.
