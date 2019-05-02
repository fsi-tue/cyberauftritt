# Website der Fachschaft Informatik Tübingen

[![Build Status](https://api.travis-ci.org/fsi-tue/cyberauftritt.svg?branch=master)](https://travis-ci.org/fsi-tue/cyberauftritt)
[![License](https://img.shields.io/github/license/fsi-tue/cyberauftritt.svg)](https://github.com/fsi-tue/cyberauftritt/blob/master/LICENSE.txt)
[![Depfu](https://img.shields.io/depfu/fsi-tue/cyberauftritt.svg)](https://depfu.com/github/fsi-tue/cyberauftritt)

Zukünftige Website der Fachschaft Informatik Tübingen.


### Installation

Um diese Seite nutzen zu können, musst du [Ruby](https://www.ruby-lang.org/de/) und [Jekyll](https://jekyllrb.com/) installiert haben.

Ubuntu/Debian:
```
sudo apt install ruby ruby-dev jekyll
```

Fedora/RHEL:
```
sudo dnf istall ruby ruby-devel jekyll
```

Danach kannst du eine lokale Version der Website folgendermaßen installieren:

```
git clone https://github.com/fsi-tue/cyberauftritt.git
cd cyberauftritt
bundle install --path ~/.vendor/bundle
```

Und anschließend kannst du deine lokale Version starten:

```
bundle exec jekyll serve
```

Dies startet einen lokalen Webserver, der unter http://127.0.0.1:4000/ erreichbar ist.


### Acknowledgements

Our Website currently uses the Jekyll theme [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) by [Dean Attali](https://deanattali.com).
