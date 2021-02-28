---
sidebar: auto
---

# Styleguide

## Testing

::: details
This is a details block, which does not work in IE / Edge
:::

### Unit

::: tip
Practice
:::

```bash
// bad
describe('test', () => {
    it('this', () => {
        expect(true).toEql(true);
    });
});

// good
describe('test', () => {
    it('this', () => {
        expect(true).toEql(true);
    });
});
```

### Integration

::: warning
Services should be running
:::

:::info
For testing
:::

```bash
// bad
describe('test', () => {
    it('this', () => {
        expect(true).toEql(true);
    });
});

// good
describe('test', () => {
    it('this', () => {
        expect(true).toEql(true);
    });
});
```

### System

::: danger
Only test the system from the public facing api
:::

```bash
// bad
describe('test', () => {
    it('this', () => {
        expect(true).toEql(true);
    });
});

// good
describe('test', () => {
    it('this', () => {
        expect(true).toEql(true);
    });
});
```
