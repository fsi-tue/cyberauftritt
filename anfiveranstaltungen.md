# Anfiveranstaltungen Sommersemester 2020

*Bitte schaut immer wieder hier vorbei, um auf dem aktuellsten Stand zu sein.*

### Semesterbeginn
Nach aktueller Lage beginnt das Semester - eine Woche später als geplant - am 20. April 2020.

### Anfibrief
Den Erstsemesterbrief solltet ihr einige Wochen vor dem Beginn eures Studiums erhalten haben. Er enthält wichtige Informationen und Tipps über euer Studium und unsere Erstsemesterveranstaltungen. Es gibt für jeden Studiengang einen eigenen Brief (nicht alle Anfibriefe sind im Sommersemester verfügbar):
### Bachelor
- [Brief B.Sc. Informatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_informatik-bsc.pdf)
- [Brief B.Sc. Bioinformatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_bioinfo-bsc.pdf)
- [Brief B.Sc. Medieninformatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_medieninfo-bsc.pdf)
- [Brief B.Sc. Medizininformatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_medizininfo-bsc.pdf)
- [Brief B.Sc. Kognitionswissenschaft](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_kogwiss-bsc.pdf)

### Master
- [Brief M.Sc. Informatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_informatik-msc.pdf)
- [Brief M.Sc. Bioinformatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_bioinfo-msc.pdf)
- [Brief M.Sc. Medieninformatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_medieninfo-msc.pdf)
- [Brief M.Sc. Medizininformatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_medizininfo-msc.pdf)
- [Brief M.Sc. Kognitionswissenschaft](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_kogwiss-msc.pdf)

### Lehramt
- [Brief B.Ed. Informatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_informatik-bed.pdf)
- [Brief M.Ed. Informatik](https://teri.fsi.uni-tuebingen.de/anfibrief/brief_informatik-med.pdf)

### 30.03. - 08.04.2020: Mathematischer Vorbereitungskurs
Der Vorkurs bietet Euch eine Wiederholung des Schulstoffs und führt Euch in die Terminologie ein, die Ihr in euren Mathe-Vorlesungen wiederfinden werdet. Es ist nicht Pflicht daran teilzunehmen, aber sehr empfehlenswert. Nicht zuletzt lernt Ihr hier erste Freunde kennen!
Aufgrund aktueller Ereignisse wird der Vorkurs online abgehalten.
Um eine Anmeldung wird bis zum 26.03.2020 gebeten. Diese erfolgt über ein [Anmeldeformular](https://uni-tuebingen.de/de/91877) (auf dieser Seite findet ihr auch noch weitere Informationen). Nachdem ihr euch angemeldet habt bekommt ihr weitere Details wie genau das Ganze abläuft.

### Veranstaltungen der Fachschaft
Mit Ausnahme des Mathematik-Vorkurses richten sich die Veranstaltungen auch an Masterstudenten, die neu nach Tübingen kommen. Ebenso sind auch alle Nebenfächler, Kognitionswissenschaftler und Informatik-Studiengänge ausdrücklich zu den genannten Veranstaltungen eingeladen!


Um zum Sand 1/14 zu gelangen, fahrt Ihr mit der Linie 2 oder 6 bis zur Haltestelle "Sand Drosselweg", von dort ist der Weg zu den Veranstaltungen ausgeschildert.


{% assign pin = '<img src="img/icons8-marker-24.png" style="max-height: 1em;" alt="location icon"/> ' %}
{% assign cal = '<img src="img/icons8-calendar-48.png" style="max-height: 1em;" alt="calendar icon"/> ' %}
{% assign info = '<img src="img/icons8-information-24.png" style="max-height: 1em;" alt="information icon"/> ' %}

{% assign events = "" | split: "" %}

{% ical url: https://cloud.fsi.uni-tuebingen.de/remote.php/dav/public-calendars/e8wPTX4TBpCNpb7W?export reverse: true only_future: true %}

    {% assign m = event.start_time  | date: "%w" | plus: 0 %}
    {% assign day = site.data.de.days[m] | append: " " %}
    {% assign event_start = event.start_time | date: "%d.%m.%y %H:%M" | prepend: day %}
    {% assign event_location = event.location | url_decode | escape | default: '<abbr title="To be announced">TBA</abbr>' %}
    {% assign event_title = event.summary | url_decode | escape %}
    {% assign event_description = event.description | url_decode | escape %}

    {% assign event_string = '<div class="well well-sm"><b>' | append: event_title | append: ":</b><br>" |
        append: cal | append: event_start | append: "<br>" |
        append: pin | append: event_location | append: "<br><br>" |
	append: info | append: event_description |
	append: "</div>" | split: '@@@@@@@NOT_OCCURRING_STRING' %}


    {% if event_title contains "Anfi" or event_title contains "Ersti" %}
        {% assign anfi = anfi | concat: event_string %}
    {% endif %}

{% endical %}

{% for event in anfi %}
{{ event }}
{% endfor %}
