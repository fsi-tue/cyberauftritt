# Anfiveranstaltungen Sommersemester 2020

### 30.03. - 08.04.2020: Mathematischer Vorbereitungskurs
_Informationen folgen_

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
