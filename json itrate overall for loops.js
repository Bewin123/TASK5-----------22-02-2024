// Sample JSON data
const resumeData = {
  personal_info: {
    name: "BEWIN SHAJI SJ",
    email: "bewinshaji01@gmail.com",
    phone: "6385640970",
    address:
      "5-29,SHAJI AHAM,MATHICODE,THICKANAMCODE P.O,KANAYAKUMARI DISTRICT PINCODE:629804",
  },
  education: [
    {
      degree: "12-TH STANDARD",
      school: "PONJESLY PUBLIC MATRICULATION SCHOOL NAGERCOIL",
      graduation_year: 2018,
    },
    {
      degree: "BACHELOR OF MECHANICAL ENGINEERING",
      school: "ANNA UNIVERSITY",
      graduation_year: 2022,
    },
  ],
  work_experience: [
    {
      position: "Senior Language Model",
      company: "OpenAI",
      start_date: "2022-01-01",
      end_date: "Present",
      responsibilities: [
        "Natural language processing",
        "Conversational web development",
        "Text generation",
      ],
    },
    {
      position: "Software Engineer Intern",
      company: "Tech Solutions",
      start_date: "2022-06-01",
      end_date: "2023-12-31",
      responsibilities: [
        "Code development",
        "Testing and debugging",
        "Collaborating with the team",
      ],
    },
  ],
  skills: ["Python", "JavaSCRIPT", "Software Development", "Problem Solving"],
  languages: ["English (Fluent)", "Tamil (Fluent)"],
  certifications: [
    {
      name: "Certified web Developer",
      organization: "web Certification Institute",
      completion_date: "2023-03-15",
    },
  ],
  interests: [
    "web designing and development",
    "Technology trends",
    "Reading",
    "Hiking",
  ],
};

// Using 'for' loop
for (let key in resumeData) {
  console.log(key, ":", resumeData[key]);
}

// Using 'for...of' loop
for (let key of Object.keys(resumeData)) {
  console.log(key, ":", resumeData[key]);
}

// Using 'forEach' for arrays
resumeData.education.forEach((educationItem) => {
  console.log("Education:", educationItem.degree, "at", educationItem.school);
});

// Using 'forEach' for skills
resumeData.skills.forEach((skill) => {
  console.log("Skill:", skill);
});
