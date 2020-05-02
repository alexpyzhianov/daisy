# Daisy

A very naive [Gatsby](https://github.com/gatsbyjs/gatsby) clone built purely for educational purposes.

**IMPORTANT! It's not an alternative to Gatsby! Don't use it as an actual static site generator!**

## Why do I need it then?

There is a good chance that you don't, but it might be helpful if you want to know how a static site generator works under the hood. It does most of the things that Gatsby does but without a ton of internal complexity and things like reliability and edge case handling. I've tried to strip down all the non-essential to expose the core mechanics and not overwhelm anyone.

## Philosophy

1. No external runtime dependencies, only standard Node stuff.
2. Daisy looks up to Gatsby but is free to do things differently if it makes sense.
3. Support of some specific OS or NodeJS version is not guaranteed as it requires code overhead.
4. The code should be clean. Whatever that means.
5. Tests make development easier.

## Roadmap

-   [x] gatsby new
-   [ ] gatsby build
-   [ ] gatsby develop

## Can I contribute?

Yes, by all means! But remember that Daisy is a purely educational tool, so changes that you make should contribute to that. If you need an actual static site generator, just use [Gatsby](https://github.com/gatsbyjs/gatsby).
