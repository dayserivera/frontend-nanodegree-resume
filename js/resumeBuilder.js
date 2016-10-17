var work = {
    "jobs":  [
        {
            "employer": "International Bank",
            "title": "Unix engineer",
            "location": "London, UK",
            "dates": "2004 to current",
            "description": "Derivative trading support"
        },
        {
            "employer": "International BankG",
            "title": "Unix SA",
            "location": "Frankfurt, Germany",
            "dates": "2000 to 2004",
            "description": "AIX, Solaris and Linux sysadmin"
        },
        {
            "employer": "Dutch ISP",
            "title": "Unix SA",
            "location": "Amsterdam, Netherlands",
            "dates": "1998 to 2000",
            "description": "Supporting the ISP Unix systems"
        },
        {
            "employer": "Clearing House",
            "title": "Unix engineer",
            "location": "Luxembourg, Luxembourg",
            "dates": "1998 to 1998",
            "description": "Real-time settlement system"
        },
        {
            "employer": "Local bank",
            "title": "Unix SA",
            "location": "Florence, Italy",
            "dates": "1994 to 1998",
            "description": "Various projects"
        },
        {
            "employer": "Multiple clients and employers",
            "title": "Multiple roles",
            "location": "Perugia, Italy",
            "dates": "1990 to 1994",
            "description": "Multiple locations from Perugia to London"
        }
    ]
};
function displayWork(){
	for(var job in work.jobs){	
		$('#workExperience').append(HTMLworkStart);
		var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$('.work-entry:last').append(formattedJob + formattedJobTitle + formattedJobDates + formattedJobDescription); 	
	}
}

displayWork();

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
 