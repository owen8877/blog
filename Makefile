.PHONY : makepage, delete, deletepage, newpage, clean

makepage :
	find pages -iname 'head_title.shtm' | xargs -d "\n" generate/makepage.sh
	generate/contentlist.sh

delete :
	generate/delete.sh

deletepage :
	generate/delete.sh

newpage : 
	generate/newpage.sh

clean :
	-find . -iname '*~' -exec rm {} \;
