file1=$(<com1.js)
file2=$(<com2.js)




if [grep -f $file1 $file2]; then
  echo -e "Test passed"
  exit 0
fi
  echo -e "Test failed"
  exit 1
