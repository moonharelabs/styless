# Configuration

Settings that affect your entire site can be changed in [Jekyll’s configuration file](https://jekyllrb.com/docs/configuration/): `_config.yml`, found in the root of your project. If you don’t have this file you’ll need to copy or create one using the theme’s [default `_config.yml`](https://github.com/MoonHareLabs/styless/new/main/docs) as a base.

**Note: for technical reasons, `_config.yml` is NOT reloaded automatically when used with `jekyll serve`. If you make any changes to this file, please restart the server process for them to be applied.**

Take a moment to look over the configuration file included with the theme. Comments have been added to provide examples and default values for most settings. Detailed explanations of each can be found below.

## Site settings

### Theme

If you’re using the Ruby gem version of the theme you’ll need this line to activate it:

```yml
theme: minimal-mistakes-jekyll
```

### Site locale

`site.lang`  is used to declare the primary language for each web page within the site.

_Example:_  `lang: "en-US"`  sets the  `lang`  attribute for the site to the  _United States_  flavor of English, while  `en-GB`  would be for the  `United Kingdom`  style of English. Country codes are optional and the shorter variation  `lang: "en"`  is also acceptable. To find your language and country codes check this  [reference table]
