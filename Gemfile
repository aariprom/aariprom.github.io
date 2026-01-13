source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "webrick" # Required for Ruby 3.0+

# Required for Ruby 3.4+ (removed from stdlib)
gem "erb"
gem "logger"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
