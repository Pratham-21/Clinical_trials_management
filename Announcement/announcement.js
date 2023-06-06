const announcementContainer = document.getElementById("announcement-container");

// Sample announcement data
const announcements = [
  {
    title: "Important Update",
    date: "May 22, 2023",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec semper mauris.",
    link: "announcement.html?id=1"
  },
  {
    title: "New Clinical Trial Opportunity",
    date: "May 15, 2023",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec semper mauris.",
    link: "announcement.html?id=2"
  },
  {
    title : "Next Check Up Session",
    date : "May 30, 2023",
    summary : "Next check session is schedule on May 30 2023 Tuesday.Visit near by centre for your check up ",
    link:"announcement.html?id=3"
  }
];

// Function to generate announcement cards
function generateAnnouncementCards() {
  announcements.forEach((announcement) => {
    const card = document.createElement("div");
    card.classList.add("announcement-card");
    
    const title = document.createElement("h2");
    title.textContent = announcement.title;
    card.appendChild(title);
    
    const date = document.createElement("p");
    date.textContent = `Date: ${announcement.date}`;
    card.appendChild(date);
    
    const summary = document.createElement("p");
    summary.textContent = announcement.summary;
    card.appendChild(summary);
    
    const link = document.createElement("a");
    link.classList.add("button");
    link.href = announcement.link;
    link.textContent = "Read More";
    card.appendChild(link);
    
    announcementContainer.appendChild(card);
  });
}

// Generate announcement cards
generateAnnouncementCards();
