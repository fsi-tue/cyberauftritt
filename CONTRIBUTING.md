# Hilf mit unsere Seite besser zu machen!

Wir freuen uns, dass du dir überlegst, dich an diesem Repository zu beteiligen.
Zunächst solltest du wissen, dass du, wenn du zu diesem Repository beitragen
möchtest, unseren
[Lizenzbestimmungen](/LICENSE.txt)
zustimmen musst. Da wir das Jekyll theme [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) von [Dean Attali](http://deanattali.com) verwenden, welches unter der [MIT Lizenz](https://opensource.org/licenses/MIT) lizensiert ist, sind alle Änderungen am Design und der Websiten Struktur ebenfalls unter der [MIT Lizenz](https://opensource.org/licenses/MIT) lizensiert. Alle Textbeiträge (in den .md Markdown Dateien) sind unter der
[CC BY 4.0 Lizenz](https://creativecommons.org/licenses/by/4.0/) lizensiert, was bedeutet, dass du den Inhalt beliebig teilen und verändern kannst unter der Bedingung, dass du entsprechend vermerkst, dass der Inhalt ursprünglich von uns, der [Fachschaft Informatik Tübingen](https://www.fsi.uni-tuebingen.de/) erstellt worden ist.


### So kannst du uns helfen

Falls du mit Git noch nicht vertraut bist, kannst du gerne ein Issue in unserem
[Issue Tracker System](https://github.com/fsi-tue/fsi.github.io/issues) öffnen. Dazu
musst nur nur auf "New issue" klicken. In dem nun geöffneten Fenster, kannst du
ähnlich wie in einer E-Mail Betreff und Nachricht eintragen.

**Beachte:** Jedes issue ist öffentlich! Möchtest du uns eine Nachricht
schicken, die nicht für die Öffentlichkeit bestimmt ist, schick uns lieber
eine E-Mail.


Falls du bereits mit Git vertraut bist, befolge die folgenden Schritte:

1. Forke dieses Repository! Im folgenden gehen wir davon aus, dass du das
   Repository erfolgreich nach https://github.com/yourname/fsi.github.io geforkt hast.
2. Hol dir eine lokale Kopie deines Forks auf deinen Rechner mit:
   ```
   git clone git@github.com:yourname/fsi.github.io.git
   ```
3. Installiere alle notwendingen Abhängigkeiten mit:
   ```
   cd fsi-tue.github.io
   bundle install
   ```
4. Starte einen lokalen Server mit:
   ```
   bundle exec jekyll serve
   ```
5. Mache deine Änderungen lokal, diese stehen dir nun (mit Außnahme der `_config.yml`) direkt unter http://127.0.0.1:4000/ zur Verfügung.
6. Committe deine Änderungen und push sie auf deinen Fork.
7. Teste deine Änderungen lokal (siehe unten).
8. Erstelle einen neuen Pull Request für deine Änderungen.

### Teste deine Änderungen

Um zu gewährleisten, dass alle Links funktionieren, nutzen wir einen [HTML Proofer](https://rubygems.org/gems/html-proofer). Dieser überprüft, ob alle Links noch funktionieren und informiert über tote Links, sofern es welche gibt.

#### Lokales testen

`html-proofer` sollte bereits als Abhängigkeit installiert worden sein. Deine lokalen Änderungen kannst du dann testen, indem du folgende Befehle in der Konsole ausführst:

```
bundle exec jekyll build
bundle exec htmlproofer ./_site
```

#### Continous Integration

Um kontinuierlich zu überprüfen, dass alle Verlinkungen zumindest existieren, nutzten wir [Travis](https://travis-ci.org/). Travis ist ein Online Dienst, der die oben genannten Befehle nach jedem push und für jeden Pull Request durchführt. Dies gibt uns die Sicherheit, dass Änderungen nichts kaputt machen. Die aktuelle Konfiguration findest du
[hier](https://github.com/fsi-tue/fsi-tue.github.io/blob/master/.travis.yml) und eine Übersicht der letzten Builds [hier](https://travis-ci.org/fsi-tue/fsi-tue.github.io/).

Falls du das Repository geforkt hast, macht es unter Umständen Sinn, Travis auch für dein Repository zu aktivieren.
