/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
	 "name":"Dayse Aparecida Rivera Rocha",
	 "role":"Web Developer",
	 "contactInfo":{"mobile":"(11)983059390", "facebook":"dayserivera", "github":"dayserivera"},
	 "pictureUrl":"images/me.png",
	 "welcomeMessagem":"Hola!",
	 "skills":["Java Programmer", "English Speaker"]
 };
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var role = HTMLheaderRole.replace("%data%", bio.role);
 
 $('#header').prepend(role);
  $('#header').prepend(formattedName);
 