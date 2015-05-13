/* Inspired by Eloquent JS
Create the Following:

#
##
###
####
#####
######
#######
########
#########
##########

*/

var line = #;

while (line.length <= 10) {
  console.log(line);
  line = line + #;
}

//Second solution using for loop

for(var line="#"; line.length <= 10; line += "#") {
  console.log(line);
}
