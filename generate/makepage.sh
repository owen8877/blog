#!/bin/bash
until [ $# -eq 0 ]
do
	cd ~/gh-pages/blog
	dir=`echo $1 | awk -F '/' '{print $1"/"$2}'`
	cd "$dir"
	shift
	# pwd
	# sed ../../template/article.html -e '/<!--title-->/r head_title.shtm' -e '/<!--header-->/r body_header.shtm' -e '/<!--section-->/r body_section.shtm' -e '/<!--footer-->/r footer.shtm' > index.html
	make -f ../../generate/Makefile.1
	# if [ $? -eq 0 ]
	# then
		# echo "Success"
	# else
		# echo "Failed!"
	# fi
	echo
done
