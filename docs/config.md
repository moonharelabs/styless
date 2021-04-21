
{% include nav.html pages=site.html_pages %}

# Configuration

Jekyll gives you a lot of flexibility to customize how it builds your site. These options can either be specified in a  `_config.yml`  or  `_config.toml`  file placed in your site’s root directory, or can be specified as flags for the  `jekyll`  executable in the terminal.

-   [Configuration Options >](https://jekyllrb.com/docs/configuration/options/)
-   [Default Configuration](https://jekyllrb.com/docs/configuration/default/)
-   [Front Matter Defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/)
-   [Environments](https://jekyllrb.com/docs/configuration/environments/)
-   [Markdown Options](#-Markdown-Options)
-   [Liquid Options](https://jekyllrb.com/docs/configuration/liquid/)
-   [Webrick Options](https://jekyllrb.com/docs/configuration/webrick/)
-   [Incremental Regeneration](https://jekyllrb.com/docs/configuration/incremental-regeneration/)

## Markdown Options

The various Markdown renderers supported by Jekyll sometimes have extra options available.

### Kramdown

Kramdown is the default Markdown renderer for Jekyll. Below is a list of the currently supported options:

-   **auto_id_prefix**  - Prefix used for automatically generated header IDs
-   **auto_id_stripping**  - Strip all formatting from header text for automatic ID generation
-   **auto_ids**  - Use automatic header ID generation
-   **coderay_bold_every**  - Defines how often a line number should be made bold
-   **coderay_css**  - Defines how the highlighted code gets styled
-   **coderay_default_lang**  - Sets the default language for highlighting code blocks
-   **coderay_line_number_start**  - The start value for the line numbers
-   **coderay_line_numbers**  - Defines how and if line numbers should be shown
-   **coderay_tab_width**  - The tab width used in highlighted code
-   **coderay_wrap**  - Defines how the highlighted code should be wrapped
-   **enable_coderay**  - Use coderay for syntax highlighting
-   **entity_output**  - Defines how entities are output
-   **footnote_backlink**  - Defines the text that should be used for the footnote backlinks
-   **footnote_backlink_inline**  - Specifies whether the footnote backlink should always be inline
-   **footnote_nr**  - The number of the first footnote
-   **gfm_quirks**  - Enables a set of GFM specific quirks
-   **hard_wrap**  - Interprets line breaks literally
-   **header_offset**  - Sets the output offset for headers
-   **html_to_native**  - Convert HTML elements to native elements
-   **line_width**  - Defines the line width to be used when outputting a document
-   **link_defs**  - Pre-defines link definitions
-   **math_engine**  - Set the math engine
-   **math_engine_opts**  - Set the math engine options
-   **parse_block_html**  - Process kramdown syntax in block HTML tags
-   **parse_span_html**  - Process kramdown syntax in span HTML tags
-   **smart_quotes**  - Defines the HTML entity names or code points for smart quote output
-   **syntax_highlighter**  - Set the syntax highlighter
-   **syntax_highlighter_opts**  - Set the syntax highlighter options
-   **toc_levels**  - Defines the levels that are used for the table of contents
-   **transliterated_header_ids**  - Transliterate the header text before generating the ID
-   **typographic_symbols**  - Defines a mapping from typographical symbol to output characters

### Example Usage
```yml
kramdown:
  html_to_native: true
```

##### There are two unsupported kramdown options

Please note that both  `remove_block_html_tags`  and  `remove_span_html_tags`  are currently unsupported in Jekyll due to the fact that they are not included within the kramdown HTML converter.

For more details about these options have a look at the  [Kramdown configuration documentation](https://kramdown.gettalong.org/options.html).

### CommonMark

[CommonMark](https://commonmark.org/)  is a rationalized version of Markdown syntax, implemented in C and thus faster than default Kramdown implemented in Ruby. It  [slightly differs](https://github.com/commonmark/CommonMark#differences-from-original-markdown)  from original Markdown and does not support all the syntax elements implemented in Kramdown, like  [Block Inline Attribute Lists](https://kramdown.gettalong.org/syntax.html#block-ials).

It comes in two flavors: basic CommonMark with  [jekyll-commonmark](https://github.com/jekyll/jekyll-commonmark)  plugin and  [GitHub Flavored Markdown supported by GitHub Pages](https://github.com/github/jekyll-commonmark-ghpages).

## Liquid Options

Liquid’s response to errors can be configured by setting  `error_mode`. The options are

-   `lax`  — Ignore all errors.
-   `warn`  — Output a warning on the console for each error. (default)
-   `strict`  — Output an error message and stop the build.

Within `_config.yml`, the default configuration is as follows:

```yml
liquid:
  error_mode: warn

```

The above example depicts the “warn” value, which is already set by default-  `error_mode: warn`. This results in any issues being called out during the build process however will continue to build if possible.

You can also configure Liquid’s renderer to catch non-assigned variables and non-existing filters by setting  `strict_variables`  and / or  `strict_filters`  to  `true`  respectively.  3.8.0

Do note that while  `error_mode`  configures Liquid’s parser, the  `strict_variables`  and  `strict_filters`  options configure Liquid’s renderer and are consequently orthogonal.

An example of setting these variables within `_config.yml` is as follows:

```yml
liquid:
  error_mode: strict
  strict_variables: true
  strict_filters: true

```

Configuring as described above will stop your build/serve from happening and call out the offending error and halt. This is helpful when desiring to catch liquid-related issues by stopping the build or serve process and allowing you to deal with any issues.

## WEBrick Options

You can provide custom headers for your site by adding them to  `_config.yml`

```yml
# File: _config.yml
webrick:
  headers:
    My-Header: My-Value
    My-Other-Header: My-Other-Value

```

### Defaults

Jekyll provides by default  `Content-Type`  and  `Cache-Control`  response headers: one dynamic in order to specify the nature of the data being served, the other static in order to disable caching so that you don’t have to fight with Chrome’s aggressive caching when you are in development mode.
