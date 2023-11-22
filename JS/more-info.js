var arr = [
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/id-card.png",
    text: "Admissions",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/conference.png",
    text: "Alumni",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/law.png",
    text: "Tenders",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/Research.png",
    text: "Research",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/meetings.png",
    text: "Outreach",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/Recruitment.png",
    text: "Recruitment",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/presentation.png",
    text: "Faculty, Students...",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/TEQIP-III.png",
    text: "TEQUIP III",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/International.png",
    text: "International",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/college.png",
    text: "VNIT Campus",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/industry.png",
    text: "Industry Interaction",
  },
  {
    img: "https://vnit.ac.in/wp-content/uploads/2020/09/Placement.png",
    text: "Campus Placement",
  },
];

const infoDiv = (arr) => {
  let section = document.querySelector(".extra-info-div");

  arr.forEach((el) => {
    let figure = document.createElement("figure");
    figure.className="extra-info-inner-div"
    let img = document.createElement("img");
    img.src = el.img;
    let figcaption = document.createElement("figcaption");
    figcaption.innerText = el.text;

    figure.append(img, figcaption);
    section.append(figure);
  });
};

infoDiv(arr);
