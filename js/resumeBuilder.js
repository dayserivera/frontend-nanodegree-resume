/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Dayse Aparecida Rivera Rocha");
 var role = HTMLheaderRole.replace("%data%", "Web Developer");
  /*$('#header').prepend(role);
  $('#header').prepend(formattedName);
 */
 var bio = {
	 "name":"Dayse Aparecida Rivera Rocha",
	 "role":"Web Developer",
	 "contactInfo":"(11)983059390",
	 "pictureUrl":"me.png",
	 "welcomeMessagem":"Hola!",
	 "skills":["Java Programmer", "English Speaker"]
 };
 $('#header').prepend(bio.role);
 $('#header').prepend(bio.name);
 