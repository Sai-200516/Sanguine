document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('.button');
    readMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.mentor').offsetTop,
            behavior: 'smooth'
        });
    });
});
//Team member open//
const clubHeads = [
    {
        imgSrc: "../source/members/DSC_0392.JPG",
        name: "Appikonda Sai",
        position: "CEO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/sai2005/" },
            { platform: "discord", url: "https://github.com/sai-200516" },
            { platform: "github", url: "https://discordapp.com/users/1150473624092934254" },
        ],
    },
    {
        imgSrc: "../source/members/Agam_Jindal.jpg",
        name: "Agam Jindal",
        position: "CO-CEO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/agam-jindal-379352298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/Agam3705" },
        ],
    },
    {
        imgSrc: "../source/members/Hemant_Srivastava.jpg",
        name: "Hemant Srivastava",
        position: "CTO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/hemantsri" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/Hemant5104" },
        ],
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "Krishna Singhal",
        position: "CFO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/krishnasinghal25" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "#" },
        ],
    },
];

const coreTeam = [
    {
        imgSrc: "../source/members/Kumari_Kriti_Singh.jpg",
        name: "Kumari Kriti Singh",
        position: "Meeting Management Lead",
        social: [
            { platform: "linkedin", url: "www.linkedin.com/in/kumari-kriti-singh-05a809284" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/kritisingh7488" },
        ],
    },
    {
        imgSrc: "../source/members/Aditya_Raj.jpg",
        name: "Aditya Raj",
        position: "Technical Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/thearadi" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/thearadi15" },
        ],
    },
    {
        imgSrc: "../source/members/",
        name: "Aalok Kumar Yadav",
        position: "Technical Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/aalokk" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/aalok2006" },
        ],
    },
    {
        imgSrc: "../source/members/mohitgoyal.jpg",
        name: "Mohit goyal",
        position: "Event Management Lead",
        social: [
            { platform: "linkedin", url: "www.linkedin.com/in/mohit goyal658" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/Mohitagarwal123" },
        ],
    },
    {
        imgSrc: "../source/members/",
        name: "Agrim Singh",
        position: "Event Management Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/agrimsingh1224" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/agrimsingh7117" },
        ],
    },
    {
        imgSrc: "../source/members/Chandan_Yadav.jpg",
        name: "Chandan yadav",
        position: "Graphic Designing Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/chandanyadav426" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/chandan91077" },
        ],
    },
    {
        imgSrc: "../source/members/Yukta.jpg",
        name: "Yukta shree",
        position: "Graphic Designing Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/yukta-shree-3b2398277/" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/Yukta233" },
        ],
    },
    {
        imgSrc: "../source/members/Peshal_mishra.jpg",
        name: "Peshal Mishra",
        position: "Content Creater Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/peshal-mishra-922355293" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/hacksmith0" },
        ],
    },
    {
        imgSrc: "../source/members/Aman_Singh.jpg",
        name: "Aman Singh",
        position: "Marketing and Promotions Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/aman-singh-a564a1283" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/Amansingh1602" },
        ],
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "Barla Jaswanth",
        position: "Photography Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/barla-jaswanth" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/barlajaswanth123" },
        ],
    },
    {
        imgSrc: "../source/members/kalpana_Negiwal.jpg",
        name: "Kalpana neginal",
        position: "Public Speaking Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/kalpana-neginal/" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/Kalpana2204" },
        ],
    },
    {
        imgSrc: "../source/members/Aman_kumar.jpg",
        name: "Aman Kumar",
        position: "Public Speaking Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/aman188/" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "https://github.com/aman-hood" },
        ],
    },
    // Add more core team members here
];

const members = [
    {
        imgSrc: "https://via.placeholder.com/150",
        name: "Member 1",
        position: "Member Position",
        social: [
            { platform: "linkedin", url: "#" },
            { platform: "discord", url: "#" },
            { platform: "github", url: "#" },
        ],
    },
    // Add more members here
];

function createMember(member) {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    const img = document.createElement("img");
    img.src = member.imgSrc;
    img.alt = `Team Member ${member.name}`;

    const name = document.createElement("h3");
    name.textContent = member.name;

    const position = document.createElement("p");
    position.textContent = member.position;

    const socialLinks = document.createElement("ul");
    socialLinks.classList.add("social-links");

    member.social.forEach(social => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = social.url;
        a.target = "_blank";
        a.classList.add(social.platform);
        li.appendChild(a);
        socialLinks.appendChild(li);
    });

    memberDiv.appendChild(img);
    memberDiv.appendChild(name);
    memberDiv.appendChild(position);
    memberDiv.appendChild(socialLinks);

    return memberDiv;
}

const clubHeadsContainer = document.getElementById("club-heads-container");
clubHeads.forEach(member => {
    clubHeadsContainer.appendChild(createMember(member));
});

const coreTeamContainer = document.getElementById("core-team-container");
coreTeam.forEach(member => {
    coreTeamContainer.appendChild(createMember(member));
});

const membersContainer = document.getElementById("members-container");
members.forEach(member => {
    membersContainer.appendChild(createMember(member));
});