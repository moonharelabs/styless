![Gem](https://img.shields.io/gem/dt/styless?logo=rubygems&style=for-the-badge)
![Gem](https://img.shields.io/gem/v/styless?logo=rubygems&style=for-the-badge)
![GitHub deployments](https://img.shields.io/github/deployments/moonharelabs/styless/github-pages?label=Github%20Pages&logo=jekyll&logoColor=red&style=for-the-badge)

<p align="center">
    <h1 align="center">Styless</h1>
    <p align="center">A modern, highly customizable, and unstyled Jekyll theme with dark mode.<br><h6 align ="center">Easily hosted on GitHub Pages with few dependencies.</h6></p>
    <p align="center"><strong><a target="_blank" href="https://moonharelabs.github.io/styless">See it in action!</a></strong></p>
</p>

<table>
    <tr>
        <th><img src="https://github.com/moonharelabs/styless/raw/main/screenshot.png"/></th>
        <th><img src="https://github.com/moonharelabs/styless/raw/main/dark-screenshot.png"/></th>
    </tr>
</table>

## Usage

### Dependencies
Styless is built for [Jekyll](https://jekyllrb.com/), a static site generator. View the [quick start guide](https://jekyllrb.com/) for more information. Styless requires no special plugins and can run on GitHub Pages’ standard Jekyll compiler.

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

### Github Pages: Use the remote theme

If you're hosting your site on GitHub Pages, [set up GitHub Pages and Jekyll locally](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) so that you can more easily work in your development environment.

1. Add Styless to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)
```yaml
remote_theme: moonharelabs/styless
```
<small>You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](https://github.com/moonharelabs/styless/tree/main/docs)</small>

### Customize Styless

You can use any css framework with styless. Just add your libraries to `_includes/custom-head.html file in your site.

## Contributing

Bug reports and pull requests are welcome on GitHub at [our GitHub repo](https://github.com/moonharelabs/styless). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/moonharelabs/styless/tree/main/CODE_OF_CONDUCT.md).

## License

The theme is available as open source under the terms of the [Unlicense License](https://github.com/moonharelabs/styless/tree/main/LICENSE).
