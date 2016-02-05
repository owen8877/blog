.PHONY : list, delete, deletepage, newpage, clean

list :
	generate/contentlist.sh

delete :
	generate/delete.sh

deletepage :
	generate/delete.sh

newpage : 
	generate/newpage.sh

clean :
	-find . -iname '*~' -exec rm {} \;
