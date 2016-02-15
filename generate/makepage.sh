#!/bin/bash
until [ $# -eq 0 ]
do
	cd ~/gh-pages/blog
	dir=`echo $1 | awk -F '/' '{print $1"/"$2}'`
	cd "$dir"
	shift
	pwd
	if [ index.html -nt head_title.shtm ]; then
		if [ index.html -nt body_header.shtm ]; then
			if [ index.html -nt body_section.shtm ]; then
				if [ index.html -nt footer.shtm ]; then continue
				fi
			fi
		fi
	fi
	sed ../../template/article.html -e '/<!--title-->/r head_title.shtm' -e '/<!--header-->/r body_header.shtm' -e '/<!--section-->/r body_section.shtm' -e '/<!--footer-->/r footer.shtm' > index.html
	if [ $? -eq 0 ]
	then
		echo "Success"
	else
		echo "Failed!"
	fi
done
