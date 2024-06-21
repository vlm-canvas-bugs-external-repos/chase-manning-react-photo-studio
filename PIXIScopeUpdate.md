# Making `__PIXI_APP__` Available to Global Scope

## Steps Taken

1. First, we found where `PIXI.Application` was instantiated: `src/sections/documents/Canvas.tsx`
2. In that file, we added the following at line 8 to declare `__PIXI_APP__` on the `window` object:

```typescript
 declare global {
    interface Window {
        __PIXI_APP__: any;
    }
 }
```

3. Then, in the same file, we added the following at line 28 to assign the Pixi application instance to the global `__PIXI_APP__`:

```typescript
 window.__PIXI_APP__ = app;
```

These changes make `__PIXI_APP__` accessible from the global scope in the browser, which can be useful for debugging or interacting with the Pixi application instance from the browser console.
