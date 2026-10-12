# Good and bad tests

## Good: through the interface

Test the code the way a caller uses it, through its real interface, not
through stand-ins for its insides.

```
// Good: checks what a caller sees
test("a customer can pay for a valid cart", () => {
  const cart = newCart();
  cart.add(aBook);
  const receipt = pay(cart, aCard);
  expect(receipt.status).toEqual("paid");
});
```

A good test:

- checks something a caller cares about;
- uses only the public interface;
- survives a rewrite of the internals;
- says what happens, not how;
- makes one logical assertion.

## Bad: tied to the implementation

```
// Bad: checks that an internal collaborator was called
test("pay calls the card processor", () => {
  const processor = fakeOf(cardProcessor);
  pay(cart, aCard);
  expect(processor.charge).toHaveBeenCalledWith(cart.total);
});
```

Warning signs:

- a fake standing in for one of the code's own collaborators;
- a test of a private function;
- assertions on how many times, or in what order, something was called;
- a test that breaks on a restructure that changed no behaviour;
- a test name that says how, not what;
- a result checked by going around the interface.

```
// Bad: goes around the interface to check
test("register stores the member", () => {
  register({ name: "Ada" });
  const row = database.query("select * from members where name = ?", ["Ada"]);
  expect(row).toBeDefined();
});

// Good: checks through the interface
test("a registered member can be looked up", () => {
  const member = register({ name: "Ada" });
  expect(findMember(member.id).name).toEqual("Ada");
});
```

## Bad: agrees by construction

The expected value is computed the same way the code computes it, so the test
passes whatever the code does.

```
// Bad: the expectation repeats the implementation
test("total adds the line prices", () => {
  const lines = [{ price: 10 }, { price: 5 }];
  expect(total(lines)).toEqual(lines.reduce((sum, line) => sum + line.price, 0));
});

// Good: the expectation is a value known independently
test("total adds the line prices", () => {
  expect(total([{ price: 10 }, { price: 5 }])).toEqual(15);
});
```
