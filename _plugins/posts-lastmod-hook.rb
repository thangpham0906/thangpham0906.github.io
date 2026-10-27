#!/usr/bin/env ruby
#
# Check for changed posts

Jekyll::Hooks.register :posts, :post_init do |post|
  begin
    commit_num = `git rev-list --count HEAD "#{ post.path }" 2>/dev/null`
    if commit_num.to_i > 1
      lastmod_date = `git log -1 --pretty="%ad" --date=iso "#{ post.path }" 2>/dev/null`
      post.data['last_modified_at'] = lastmod_date if lastmod_date && !lastmod_date.strip.empty?
    end
  rescue StandardError => _e
    # Silently ignore if git metadata is unavailable during build
  end
end
