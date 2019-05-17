FROM jekyll/jekyll

COPY --chown=jekyll:jekyll . .

RUN bundle install --quiet --clean

CMD ["jekyll", "serve"]
