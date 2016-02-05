#!/bin/bash
#find pages -iname index.html | sed 's#\([^ ]*\)\([^/]*\)\(.*\)#<li>\n\t<a href=\"\1\2\3\">\n\t\t\2\n\t<\/a>\n<\/li>#g' > articlelist.tmp
find pages -iname index.html | sort -r | awk -F '/' '{print "<li>\n\t<a href=\""$1"/"$2"/"$3"\">\n\t\t"$2"\n\t</a>\n</li>"}' > articlelist.tmp
cat template/main.html | sed "/<articlelist>/a <\/ul>" | sed "/<articlelist>/r articlelist.tmp" | sed "s/<articlelist>/<ul>/g" > index.html
