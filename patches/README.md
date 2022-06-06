# Patches

## What is this folder?
See <https://github.com/ds300/patch-package>. Essentially, it lets us modify the source code of our dependencies without the overhead of having to fork the repo etc.

## What changes have you made then?

### `gatsby-plugin-sharp`
We globally make `fluid` query generate a couple of extra sizes, so that the browser is more likely to download only exactly the right sized image.


### `react-hook-form`
Bad type def for errors - says it returns string | ReactElement - it should only be string.
https://github.com/react-hook-form/react-hook-form/issues/1713
