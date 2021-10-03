---
layout: page
---

## Getting started

Styless is built for [Jekyll](https://jekyllrb.com/), a static site generator. View the [quick start guide](https://jekyllrb.com/) for more information. Styless requires no special plugins and can run on GitHub Pages’ standard Jekyll compiler. The [Jekyll SEO Tag plugin](https://github.com/jekyll/jekyll-seo-tag) is included by default (no need to run any special installation) to inject SEO and open graph metadata on docs pages. For information on how to configure SEO and open graph metadata visit the [Jekyll SEO Tag usage guide](https://jekyll.github.io/jekyll-seo-tag/usage/).

### Quick start: Use as a GitHub Pages remote theme

1. Add Styless to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)
```yaml
remote_theme: moonharelabs/styless
```
You may also optionally specify a branch, [tag](https://github.com/MoonHareLabs/styless/tags), or commit to use by appending an @ and the Git ref (e.g., `MoonHareLabs/styless@1.1.0` or `MoonHareLabs/styless@bbf3cbc5fd64a3e1885f3f99eb90ba92af84063d`). This is useful when rolling back to older versions of the theme. If you don’t specify a Git ref, the latest on `master`(`main`) will be used.

You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](https://github.com/moonharelabs/styless/tree/main/docs)


### Local installation: Use the gem-based theme

1. Install the Ruby Gem
```bash
$ gem install styless
```
```yaml
# .. or add it to your your Jekyll site’s Gemfile
gem "styless"
```
2. Add Styless to your Jekyll site’s `_config.yml`
```yaml
theme: "styless"
```
3. Run you local Jekyll server
```bash
$ jekyll serve
```
```bash
# .. or if you're using a Gemfile (bundler)
$ bundle exec jekyll serve
```
4. Point your web browser to [http://localhost:4000](http://localhost:4000)

If you're hosting your site on GitHub Pages, [set up GitHub Pages and Jekyll locally](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) so that you can more easily work in your development environment.
