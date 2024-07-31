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
            { platform: "discord", url: "https://discordapp.com/users/1150473624092934254" },
            { platform: "github", url: "https://github.com/sai-200516 " },
        ],
    },
    {
        imgSrc: "../source/members/Agam_Jindal.jpg",
        name: "Agam Jindal",
        position: "CO-CEO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/agam-jindal-379352298" },
            { platform: "discord", url: "https://discordapp.com/users/912524096741445684" },
            { platform: "github", url: "https://github.com/Agam3705" },
        ],
    },
    {
        imgSrc: "../source/members/Hemant_Srivastava.jpg",
        name: "Hemant Srivastava",
        position: "CTO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/hemantsri" },
            { platform: "discord", url: "https://discordapp.com/users/699221301868363787" },
            { platform: "github", url: "https://github.com/Hemant5104" },
        ],
    },
    {
        imgSrc: "../source/members/Krishna Singhal.jpg",
        name: "Krishna Singhal",
        position: "CFO",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/krishnasinghal25" },
            { platform: "discord", url: "https://discordapp.com/users/1198303957710295120" },
            { platform: "github", url: "https://github.com/Krishnasinghal25" },
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
            { platform: "discord", url: "https://discord.com/users/1224005783105048758" },
            { platform: "github", url: "https://github.com/kritisingh7488" },
        ],
    },
    {
        imgSrc: "../source/members/Aditya_Raj.jpg",
        name: "Aditya Raj",
        position: "Technical Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/thearadi" },
            { platform: "discord", url: "https://discordapp.com/users/918585292905152623" },
            { platform: "github", url: "https://github.com/thearadi15" },
        ],
    },
    {
        imgSrc: "../source/members/Aalok Kumar Yadav.jpg",
        name: "Aalok Kumar Yadav",
        position: "Technical Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/aalokk" },
            { platform: "discord", url: "https://discord.com/users/709643330710929440" },
            { platform: "github", url: "https://github.com/aalok2006" },
        ],
    },
    {
        imgSrc: "../source/members/mohitgoyal.jpg",
        name: "Mohit goyal",
        position: "Event Management Lead",
        social: [
            { platform: "linkedin", url: "www.linkedin.com/in/mohit goyal658" },
            { platform: "discord", url: "http://discordapp.com/users/1178650609621151875" },
            { platform: "github", url: "https://github.com/Mohitagarwal123" },
        ],
    },
    {
        imgSrc: "../source/members/Agrim Sing.jpg",
        name: "Agrim Singh",
        position: "Event Management Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/agrimsingh1224" },
            { platform: "discord", url: "https://discordapp.com/users/1267353965050462312" },
            { platform: "github", url: "https://github.com/agrimsingh7117" },
        ],
    },
    {
        imgSrc: "../source/members/Chandan_Yadav.jpg",
        name: "Chandan yadav",
        position: "Graphic Designing Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/chandanyadav426" },
            { platform: "discord", url: "https://discordapp.com/users/1209081531939946527" },
            { platform: "github", url: "https://github.com/chandan91077" },
        ],
    },
    {
        imgSrc: "../source/members/Yukta.jpg",
        name: "Yukta shree",
        position: "Graphic Designing Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/yukta-shree-3b2398277/" },
            { platform: "discord", url: "https://discordapp.com/users/889375896723673098" },
            { platform: "github", url: "https://github.com/Yukta233" },
        ],
    },
    {
        imgSrc: "../source/members/Peshal_mishra.jpg",
        name: "Peshal Mishra",
        position: "Content Creater Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/peshal-mishra-922355293" },
            { platform: "discord", url: "https://discordapp.com/users/1032330892745654364" },
            { platform: "github", url: "https://github.com/hacksmith0" },
        ],
    },
    {
        imgSrc: "../source/members/Aman_Singh.jpg",
        name: "Aman Singh",
        position: "Marketing and Promotions Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/aman-singh-a564a1283" },
            { platform: "discord", url: "https://discordapp.com/users/1165651008874102878" },
            { platform: "github", url: "https://github.com/Amansingh1602" },
        ],
    },
    {
        imgSrc: "../source/members/Barla jaswanth.jpg",
        name: "Barla Jaswanth",
        position: "Photography Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/barla-jaswanth" },
            { platform: "discord", url: "https://discord.com/users/1209019417233719317" },
            { platform: "github", url: "https://github.com/barlajaswanth123" },
        ],
    },
    {
        imgSrc: "../source/members/kalpana_Negiwal.jpg",
        name: "Kalpana neginal",
        position: "Public Speaking Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/kalpana-neginal/" },
            { platform: "discord", url: "https://discordapp.com/users/1214570543550832722" },
            { platform: "github", url: "https://github.com/Kalpana2204" },
        ],
    },
    {
        imgSrc: "../source/members/Aman_kumar.jpg",
        name: "Aman Kumar",
        position: "Public Speaking Co-Lead",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/aman188/" },
            { platform: "discord", url: "https://discordapp.com/users/1267008083943489639" },
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
