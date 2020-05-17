# Patches

## What is this folder?
See <https://github.com/ds300/patch-package>. Essentially, it lets us modify the source code of our dependencies without the overhead of having to fork the repo etc.

## What changes have you made then?

### `gatsby-plugin-sharp`
The patch file for this has two changes.
1. By default it always adds the original image resolution to the generated `srcSet`. This is confusing and annoying as it basically means it doesn't respect its own `maxWidth` param, and risks us serving a masssive image to the user when we weren't expecting to. So we remove it.
2. We globally make `fluid` query generate a couple of extra sizes, so that the browser is more likely to download only exactly the right sized image.
