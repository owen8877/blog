#!/bin/bash
while true
do
	read -p 'Title : ' title
	if [ -n "$title" ]
	then
		break
	fi
	echo 'Title can not be void!'
done

read -p 'Footer : ' footer
if [ -z "$footer" ]
then
	footer="xDroid is learning javascript"
	echo "Footer uses default \"$footer\""
fi

date=`LC_ALL=en_US.UTF-8 date "+%b %-d %Y"`
folderdate=`date "+%Y%m%d"`

mkdir "pages/$folderdate $title"

#cat template/article.html | sed "s/<title>/<title>$title<\/title>/g" | sed "s/<h1>/<h1>$title<\/title>/g" | sed "s/<time>/<h2>$date<\/h2>/g" | sed "s/<footer>/<footer>$footer<\/footer>/g" > "pages/$folderdate $title/index.html"

echo "<section>\
</section>" > "pages/$folderdate $title/body_section.shtm"

echo "<header>\
<h1>$title</h1>\
<h2>$date</h2>\
<p></p>\
<h3><a href="../../index.html">Home Page</a></h3>\
</header>" > "pages/$folderdate $title/body_header.shtm"

echo "<title>$title</title>" > "pages/$folderdate $title/head_title.shtm"

echo "<footer>$footer</footer>" > "pages/$folderdate $title/footer.shtm"
