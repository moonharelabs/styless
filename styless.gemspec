# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "styless"
  spec.version       = "1.0.0"
  spec.authors       = ["Kavindu Santhusa"]
  spec.email         = ["patrick.marsceill@gmail.com"]

  spec.summary       = %q{The Unstyled Jekyll Theme.}
  spec.homepage      = "https://github.com/moonharelabs/styless"
  spec.license       = "Unlicense"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-admin"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"

  spec.add_development_dependency "bundler"
end
