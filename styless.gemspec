# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "styless"
  spec.version       = "0.0.1"
  spec.authors       = ["Kavindu Santhusa"]
  spec.email         = ["patrick.marsceill@gmail.com"]

  spec.summary       = %q{The Unstyled Jekyll Theme.}
  spec.homepage      = "https://github.com/moonharelabs/styless"
  spec.license       = "Unlicense"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|bin|_layouts|_includes|lib|Rakefile|_sass|LICENSE|README)}i) }
  spec.executables   << 'styless'

  spec.add_development_dependency "bundler", "~> 2.1.4"
  spec.add_runtime_dependency "jekyll", ">= 3.8.5"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
  spec.add_runtime_dependency "rake", ">= 12.3.1", "< 13.1.0"

end
