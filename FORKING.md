# Die FSI-Seite weggabeln
Diese Anleitung erklärt, wie man die FSI-Homepage bearbeitet. Die Voraussetzungen dafür sind:
- Ein GitHub-Account,
- auf Windows die Git-Shell
- auf Linux bzw. Mac OS ein installiertes git sowie ein Terminal
- grundsätzliches Verständnis für Git.

<!-- Für die Git-Klugscheißer: Diese Anleitung orientiert sich an den offiziellen GitHub-Anleitungen https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork und https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork -->

## Den Spaß weggabeln :fork_and_knife:
Damit du die Homepage bearbeiten kannst, musst du dir zunächst auf deinem GitHub-Account eine Kopie ("Fork") der Fachschaftsseite erstellen.
Ruf dazu zunächst das [**Repository**](https://github.com/fsi-tue/cyberauftritt) auf. Klicke oben rechts auf "Fork". Du besitzt nun eine Kopie der Fachschaftswebseite. Klicke (auf der Seite deiner Kopie, die sich selbst öffnen sollte) auf den grünen Button "Code".


### Mit GitHub Desktop
> :information_source: Noch nicht ausprobiert. Freiwillige vor!

### Mit SSH
> Tipp: Wenn du nicht weißt, was SSH-Keys sind, gehe zum Unterpunkt "mit HTTPS". Begib dich direkt dorthin, gehe nicht über Los, ziehe keine 4000 DM ein.

Kopiere die Zeile, die im Textfeld bei "Clone with SSH" steht. Öffne ein Terminal, gehe in das Verzeichnis in dem ein Unterordner für die Fachschaftsseite erstellt werden soll. Tippe dann im Terminal: `git clone <Strg-Shift-V>`
Es sollte das hier entstehen:
```bash
git clone git@github.com:deinusername/cyberauftritt.git
```
Führe den Befehl aus. Der Ordner "cyberauftritt" entsteht.
### Mit HTTPS
Klicke auf "Use HTTPS". Kopiere die Zeile, die im Textfeld bei "Clone with HTTPS" steht. Öffne ein Terminal, gehe in das Verzeichnis in dem ein Unterordner für die Fachschaftsseite erstellt werden soll. Tippe dann im Terminal: `git clone <Strg-Shift-V>`
Es sollte das hier entstehen:
```bash
git clone https://github.com/fsi-tue/cyberauftritt.git
```
Führe den Befehl aus. Du wirst nach GitHub-Benutzernamen und dem dazugehörigen Passwort gefragt.
Der Ordner "cyberauftritt" entsteht.

## Original-Repository als Referenz hinzufügen

Je nach dem wie viel auf der Seite gerade geändert wird, musst du dafür sorgen, dass deine Kopie mit dem Original auf einem Stand bleibt. Hierzu musst du einen sog. "Upstream" hinzufügen.
- `cd <Verzeichnis zu deinem 'cyberauftritt'-Fork>`
### Mit SSH
> Tipp: Wenn du nicht weißt, was SSH-Keys sind, gehe zum Unterpunkt "mit HTTPS". Begib dich direkt dorthin, gehe nicht über Los, ziehe keine 4000 DM ein.
>
```bash
git remote add upstream git@github.com:fsi-tue/cyberauftritt.git
```
### Mit HTTPS
```bash
git remote add upstream https://github.com/fsi-tue/cyberauftritt.git
```
Benutzernamen und Passwort eingeben.

## Änderungen holen und loslegen
> :warning: Obacht! Prüfe mit `git status`, ob du Änderungen hast, die noch nicht committed wurden. Diese Schritte gehen davon aus, dass du einen "sauberen" Fork hast, also nichts das geändert, aber noch nicht gepusht wurde.

- Änderungen vom Original holen: `git fetch upstream`
- Eigene Kopie auf gleichen Stand bringen: `git merge upstream/master`

Nun ist es erst mal ein ganz normaler Commit:

- Zeugs machen, das du machen willst
- `git add <files you changed>`
- `git commit -m '<add information xyz to file abc.md, fix typo in foobar.md>'`
- `git push`

Im Zweifel hilft immer ein Blick auf die Ausgabe von `git status`. Hier wird dir gezeigt, was du geändert hast, was schon committed ist und was nicht.
Wie eine gute Commit-Message aussehen sollte, kannst du [hier](https://chris.beams.io/posts/git-commit/) nachlesen.

## Änderungen zum Original überführen
Nun musst du eine Anfrage stellen, dass die Änderungen in deiner Kopie in das Original überführt werden. GitHub nennt das einen *Pull Request*.
Rufe deine Kopie auf GitHub auf, du siehst direkt über der Auflistung der Dateien eine Zeile wie `This branch is X commits ahead of fsi-tue:master.`. Klick in dieser Zeile auf "Pull request".
!["Pull Request"-Button auf GitHub](img/button_pr.png)

Auf der erscheinenden Seite sollte hoffentlich "Able to merge. These branches can be automatically merged." stehen. Wenn das nicht der Fall ist, wende dich bitte [per Mail](mailto:fsi-admin@fsi.uni-tuebingen.de) an die Admins. Vergiss nicht, deinen Fork mit in der Mail zu verlinken.
- Klick auf "Create Pull request". Im Feld "Leave a comment" eintragen, welche Veränderungen dieser Pull Request mit sich bringt. z.B.:
```
This PR will introduce <xyz>
```
oder:

```
This PR adds information xyz to <filename_you_changed.md>.
```

Drücke auf den dicken grünen Button, um deinen Pull Request loszuschicken. Die Admins überprüfen deine Änderungen und lassen sie entweder zu oder werden dich bitten, noch etwas zu ändern.

### Ach fuck, ich hab was vergessen!
Unschön, aber macht nix. Sofern der PR noch nicht "durchgelassen" wurde, kannst du deiner Kopie weitere Commits hinzufügen (s.o., `git add`, `git commit`, `git push`) sie fließen dann in den Pull Request mit ein.
