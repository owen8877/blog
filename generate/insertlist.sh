#!/bin/bash
find . -iname index.html | grep pages | sed 's#\([^ ]*\)\([^/]*\)\(.*\)#<li>\n\t<a href=\"\1\2\3\">\n\t\t\2\n\t<\/a>\n\<\/li>#g' > articlelist.tmp
cat template/main.html | sed "/<articlelist>/a <\/ul>" | sed "/<articlelist>/r articlelist.tmp" | sed "s/<articlelist>/<ul>/g" > index.html
