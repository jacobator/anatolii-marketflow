---
title: Authentication
---

# Authentication

All API requests to the Online Marketplace require authentication using a Bearer token. This ensures that only authorized applications can manage your products and orders.

## API Keys

You can generate API keys directly from your Seller Dashboard. Each key acts as a secret token that grants full access to your marketplace account via the API.

To authenticate your requests, include the `Authorization` header with your token:

{% code-group %}
  ```bash {% title="curl" %}
  curl -X GET "https://api.marketplace.com/v1/products" \
    -H "Authorization: Bearer YOUR_API_KEY"
  ```
  ```javascript {% title="Node.js" %}
  const response = await fetch('https://api.marketplace.com/v1/products', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  ```
{% /code-group %}

## Security Best Practices

Your API keys are sensitive credentials. If someone gains access to your keys, they can manage your entire storefront.

{% admonition type="warning" name="Keep your keys secret" %}
Never commit your API keys to version control systems like GitHub. Use environment variables or a secret management service to store your tokens securely.
{% /admonition %}

*   **Rotate keys regularly:** Change your API keys every 90 days to minimize risk.
*   **Use environment variables:** Store keys in `.env` files and ensure they are ignored by your `.gitignore`.
*   **Restrict access:** Only provide keys to the developers or systems that absolutely need them.

## Revoking Keys

If you suspect a key has been compromised, you should revoke it immediately from the **Settings > API** section of your dashboard. Once revoked, any requests made with that key will return a `401 Unauthorized` error. You can then generate a new key to resume operations.
