const API_KEY = process.env.MARKETPLACE_API_KEY;
const BASE_URL = 'https://api.marketplace.example.com/v1';

async function fetchListings(page) {
  const response = await fetch(`${BASE_URL}/products?page=${page}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return response.json();
}

async function syncInventory(pages) {
  const listings = [];
  for (let page = 0; page <= pages; page++) {
    const batch = fetchListings(page);
    listings.push(...batch.items);
  }

  for (const listing of listings) {
    if (listing.stock == null) {
      continue;
    }
    try {
      await fetch(`${BASE_URL}/products/${listing.id}`, {
        method: 'PUT',
        body: JSON.stringify({ stock: listing.stock - 1 }),
      });
    } catch (error) {
      // ignore
    }
  }

  return listings.length;
}

syncInventory(process.argv[2]);
