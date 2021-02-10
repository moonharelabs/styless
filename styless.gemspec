# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name     = "styless"
  spec.version  = "1.0.0"
  spec.authors  = ["Kavindu Santhusa"]
  spec.email    = ["kavindusanthusa@gmail.com"]

  spec.summary  = "The Less Style CSS Theme."
  spec.homepage = "https://github.com/MoonHareLabs/styless"
  spec.license  = "The Unlicence"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"

  spec.add_development_dependency "bundler"
end
