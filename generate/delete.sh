#!/bin/bash
echo "Below is the list of articles :"
find pages -iname index.html | sort -r > .folderlist
cat .folderlist | awk '{print FNR "\t" $0}' 
totalnum=`wc .folderlist -l | awk -F ' ' '{print $1}'`
#echo $totalnum
selectnum=""
while true
do
	read -p "Input number to delete (0 to quit) : " selectnum
	if [ $selectnum -ge "1" -a $selectnum -le $totalnum ]
	then
		echo -n "Are you sure to delete \""`sed "$selectnum"p .folderlist -n | awk -F '/' '{print $2}'`"\" ? (yes|no) : "
		read need
		case $need in
			yes|y)
				break
				;;
			*)
				continue
				;;
		esac
	fi
	if [ $selectnum = "0" ]
	then
		exit
	fi
	echo "Input invalid!"
done

sed "$selectnum"p .folderlist -n | awk -F '/' '{print $1"/"$2}' | xargs -d "\n" rm -r
echo Deleted.
