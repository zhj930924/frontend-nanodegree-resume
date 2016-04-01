/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*jshint multistr: true */

var work = {
    "jobs": [{
        "employer": "ISIC China",
        "title": "Marketing and Operations Intern",
        "location": "Shanghai, China",
        "dates": "Summer 2015",
        "description": "Prepared and analyzed marketing statistics, suggesting needed improvements. \
                        Participated in multi-platform E-commerce business development. \
                        Simplified business process by automatizing data entry and logistics."
    }, {
        "employer": "Green River College",
        "title": "Peer Mentor, Foundation for Success",
        "location": "Auburn, WA",
        "dates": "2013 – 2014",
        "description": "Collaborated with staff in facilitation of new-student orientation for international students. \
                        Led weekly mentoring session for five students throughout quarter. \
                        Collaborated with other mentors to conduct weekly meetings for feedback."
    }, {
        "employer": "Self-Employed",
        "title": "Independent Contractor",
        "location": "Shanghai, China",
        "dates": "2009– 2011",
        "description": "Introduced E-commerce to Fucida Lighting Electrical Equipment Co. Ltd. Developed independent web store (1688.com) for Fucida on Alibaba. \
                        Sold older inventory for Fucida and facilitated communications to secure deals. \
                        Located supplies for Taobao store by communicating with industrial vendors."
    }, {
        "employer": "Self-Employed",
        "title": "Independent Business Owner",
        "location": "Shanghai, China",
        "dates": "2007– 2011",
        "description": "Oversaw daily operation of store on www.taobao.com. \
                        Communicated with vendors for pricing strategy, promotions, and logistics. \
                        Explored cooperation opportunities with peers and searched for new vendors. \
                        Performed web analytics and utilized SEO tools to improve product tiles."
    }]
};

work.display = function() {
    for (var job in work.jobs) {
        // create new div for work experience
        $('#workExperience').append(HTMLworkStart);
        // concat employer and title
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Building a Student Intervention System",
        "dates": "2016",
        "description": "Investigated the factors that affect a student's performance in high school. \
                        Trained and tested several supervised machine learning models on a given dataset to predict how likely a student is to pass. \
                        Selected the best model based on relative accuracy and efficiency.",
        "images": []
    }, {
        "title": "Predicting Boston Housing Prices",
        "dates": "2016",
        "description": "Built a model to predict the value of a given house in the Boston real estate market using various statistical analysis tools. \
                        Identified the best price that a client can sell their house utilizing machine.",
        "images": []
    }]
};

projects.display = function() {
    for (var project in projects.projects) {
        // create new div for projects
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};

projects.display();


var bio = {
    "name": "Jing Zhang",
    "role": "Entrepreneur, Web Developer, Business Analyst, Data Enthusiast, Traveler",
    "contacts": {
        "mobile": "253-326-0017",
        "email": "zhj930924@gmail.com",
        "github": "https://github.com/zhj930924/",
        "twitter": "@zhj930924",
        "location": "Charlottesville, Virginia"
    },
    "welcomeMessage": "Die Luft der Freiheit weht",
    "skills": ["MS Office, E-commerce, Web Development, Web Analytics, Cooking, Photography",
            "Business: Project Management, Marketing, Operational Management",
            "Programing: Python, Javascript, Ruby on Rails, Matlab, C",
            "Machine Learning: Python, Rapid Miner, Tableau, Dato",
            "Data Science: Hadoop, Hive, R, SAS, Nosql, Spark, D3.js"
            ],
    "biopic": "images/me.png"
};

bio.display = function(){
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedHeaderName, formattedHeaderRole);

    //var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contacts);
    //$("#").append(formattedContactGeneric);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkills);
    }

};

bio.display();

var education = {
    "schools": [{
        "name": "Green River College",
        "location": "Auburn, Washington",
        "degree": "Associate of Business",
        "majors": ["Business Management"],
        "dates": 2014,
        "url": "http://greenriver.edu"
    }, {
        "name": "University of Virginia",
        "location": "Charlottesville, Virginia",
        "degree": "Bachelor of Science",
        "majors": ["Comemrce: Information Technology", "Comemrce: Finance", "Comemrce: Entrepreneurship"],
        "dates": 2016,
        "url": "http://www.virginia.edu"
    }],
    "onlineCourses": [{
        "title": "Machine Learning Engineer Nanodegree",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }]
};

education.display = function() {
    for (var school in education.schools) {
        // create new div for education
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (education.schools[school].majors.length > 0) {
            for (var major in education.schools[school].majors) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
    }

    $("#education").append(HTMLonlineClasses);

    for (var online in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

// internationalize names: Sebastian THRUN
function inName() {
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

var name = $("#name").text();

$("#main").append(internationalizeButton);

// show map
$("#mapDiv").append(googleMap);
