require "html-proofer"

task default: %w[test]

desc "Test the HTML files"
task :test do
  options = { # Documentation: https://github.com/gjtorikian/html-proofer#configuration
    :url_ignore => [/^https:\/\/www\.blablacar\.de/,/^https:\/\/useplaintext\.email/],
    :file_ignore => [/^_site\/covid19\/vorlesungen\/index\.html/],
    # Specific documentation: https://github.com/gjtorikian/html-proofer#configuring-typhoeus-and-hydra
    :typhoeus => { :connecttimeout => 60, :timeout => 90 },
    :hydra => { :max_concurrency => 10 },
  }
  HTMLProofer.check_directory("_site", options).run
end

# Reasons:
# - https://www.blablacar.de: Blocks bots
# - _site/covid19/vorlesungen/index.html: Too many links
#   - The content may change too quickly, a lot of links are complicated, and
#     some links might not be online yet or only available internally.
# - https://useplaintext.email: Temporary exception (curl fails due to a missing intermediate certificate)
