# What to fake

Fake only at the edges of the system:

- outside services, such as payment or email;
- the database, sometimes: a real test database is better where it is
  practical;
- time and randomness;
- the file system, sometimes.

Never fake:

- the code's own parts;
- its internal collaborators;
- anything you control.

## Making the edges easy to fake

**Pass dependencies in.** A function that is handed the outside service it
uses can be handed a fake instead; a function that builds its own cannot.

```
// Easy to fake: the client is passed in
function chargeOrder(order, paymentClient) {
  return paymentClient.charge(order.total);
}

// Hard to fake: the client is built inside, from configuration
function chargeOrder(order) {
  const client = new PaymentClient(readConfig("payment_key"));
  return client.charge(order.total);
}
```

**Prefer one function per outside operation to one generic call.** Each
operation can then be faked on its own, with no branching inside the fake.

```
// Good: each operation can be faked on its own
const shop = {
  getCustomer: (id) => request(`/customers/${id}`),
  getOrders: (customerId) => request(`/customers/${customerId}/orders`),
  placeOrder: (order) => request("/orders", { method: "POST", body: order }),
};

// Bad: a fake of this needs branching to tell the calls apart
const shop = {
  call: (path, options) => request(path, options),
};
```

With one function per operation, each fake returns one known shape, the
test's setup holds no branching, a reader can see which operations a test
touches, and each operation keeps its own types.
