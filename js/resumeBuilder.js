var cameron = {};
cameron.job = "course dev";

var makeCourse = function(){
	console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev"){
	makeCourse();
	courses = courses + 1;
	if(courses === 10){
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);

for(var i = 0; i < 9; i++){
	console.log(i);
}

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
 if(bio.skills.length > 0){
	 $('#header').append(HTMLskillsStart);
	 
	 var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	 $('#skills').append(formattedSkill);
	 
	 var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	 $('#skills').append(formattedSkill);
 }
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var role = HTMLheaderRole.replace("%data%", bio.role);
 
 $('#header').prepend(role);
 $('#header').prepend(formattedName);
 