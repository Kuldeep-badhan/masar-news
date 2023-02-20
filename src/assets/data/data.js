import shekh from "../homeImg/shekh.jpeg";
import shekh2 from "../homeImg/shekh2.jpg";
import shekh3 from "../homeImg/shekh3.jpg";
import home1 from "../homeImg/homeg1.jpg";
import home2 from "../homeImg/homeg2.jpg";
import home3 from "../homeImg/homeg3.jpg";
import home4 from "../homeImg/homeg4.jpg";
import clean1 from "../homeImg/clean1.jpg";
import clean2 from "../homeImg/clean2.jpg";
import clean3 from "../homeImg/clean3.jpg";
import clean4 from "../homeImg/clean4.jpg";
import strategy1 from "../homeImg/strategy1.jpg";
import strategy2 from "../homeImg/strategy2.png";
import strategy3 from "../homeImg/strategy3.jpeg";
import techtrends from "../homeImg/techtrends.jpg";
import inthemedia1 from "../homeImg/inthemedia1.jpg";
import inthemedia2 from "../homeImg/inthemedia2.jpg";
const data = [
  {
    id: 1,
    heading:
      "The UAE and France agree to form bilateral partnership to focus on the decarbonization of hard-to-abate (HTA) industries",
    desc: "His Excellency Dr Sultan Ahmed Al Jaber, UAE Minister of Industry and Advanced Technology, President-Designate for COP28, and Chairman of Masdar, yesterday conferred with His Excellency Bruno Le Maire, Minister of the Economy, Finance, and Industrial and Digital Sovereignty, as part of the French Minister’s visit to the United Arab Emirates.",
    imgSrc: shekh,
    date: " 31 Jan 2023",
    topic: " Corporate, Clean Energy, Projects, Partnership, Sultan Al Jaber",
    tag: "Corporate",
    url: "/Corporate/1",
  },
  {
    id: 17,
    heading:
      "Masdar Signs Agreement to Explore Exporting Green Hydrogen from Abu Dhabi to Europe",
    desc: "Masdar, one of the world’s leading clean energy companies, Port of Amsterdam, SkyNRG, Evos Amsterdam and Zenith Energy have signed a memorandum of understanding (MoU) to explore the development of a green hydrogen supply chain between Abu Dhabi and Amsterdam to support Dutch and European markets. ",
    imgSrc: shekh2,
    tag: "Clean Energy",
    topic: "Clean Energy, Projects, Sultan Al Jaber",
    date: " 13 Jan 2023",
    url: "/Clean-Energy/17",
  },
  {
    id: 18,
    heading:
      "Masdar film shows London Array’s impact on British coastal community",
    desc: "Masdar’s London Array, one of the world’s largest wind farms, has been helping to power half a million British homes, create jobs, and cut carbon emissions. The offshore facility has brought jobs to Britain’s north Kent coast. It has also helped to shrink the UK’s carbon footprint by generating 630 megawatts (MW) of renewable energy and, displacing 925,000 tonnes of carbon dioxide per year. ",
    imgSrc: shekh3,
    tag: "Clean Energy",
    topic: " Clean Energy, Power to change",
    date: "  03 Jan 2023",
    url: "/Clean-Energy/18",
  },
  {
    id: 2,
    heading:
      "Abu Dhabi’s Department of Energy to support Abu Dhabi Sustainability Week as Principal Partner",
    desc: "description",
    imgSrc: techtrends,
    date: " 07 Jan 2021",
    topic: " ADSW, Strategic Platforms",
    tag: "Tech Trends",
    url: "/Tech-Trends/2",
  },

  {
    heading:
      "Abu Dhabi Sustainability Week 2023 Successfully Concludes Setting UAE on Road to COP28",
    id: 3,
    desc: "description",
    imgSrc: home1,
    tag: "ADSW",
    topic: " ADSW, Strategic Platforms, Sultan Al Jaber",
    date: " 24 Jan 2023",
    url: "/ADSW/3",
  },
  {
    id: 4,
    heading:
      "Masdar to Develop 5 GW of Renewable Energy Projects to Advance Africa’s Clean Energy Objectives",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime laudantium! Laboriosam illum nihil aliquid veritatis rerum vero ea, velit asperiores iusto deleniti nulla?  ",
    imgSrc: home2,
    tag: "Clean Energy",
    url: "/Clean-Energy/4",
  },
  {
    id: 5,
    heading:
      "Masdar and DEWA Commit to Support UAE Sustainability Objectives with Partnership Agreement for ADSW and WETEX",
    desc: "description",
    date: " 18 Jan 2023",
    imgSrc: home3,
    tag: " ADSW",
    topic: " ADSW",
    url: "/ADSW/5",
  },
  {
    id: 6,
    heading:
      "Masdar Signs Agreement to Develop Clean Energy Projects in Kyrgyzstan with 1 GW Capacity",
    date: " 10 Jan 2023",
    desc: "description",
    imgSrc: home4,
    tag: "Clean Energy",
    topic: "Projects",
    url: "/Clean-Energy/6",
  },

  {
    id: 7,
    heading:
      "Masdar and IFC Agree to Explore Ways to Advance Climate Action in Emerging Markets",
    desc: "description",
    imgSrc: clean1,
    tag: "Clean Energy",
    topic: "Clean Energy, Projects",
    date: " 14 Feb 2023",
    url: "/Clean-Energy/7",
  },
  {
    id: 8,
    heading:
      "Masdar Opens Office in Azerbaijan to Support Nation’s Clean Energy Objectives",
    desc: "description",
    date: " 06 Feb 2023",
    topic: " Clean Energy, Corporate",
    imgSrc: clean2,
    url: "/Clean-Energy/8",

    tag: "Clean Energy",
  },
  {
    id: 9,
    heading:
      "Emerge Partners with Coca-Cola Al Ahlia Beverages’ on new Solar Project",
    desc: "description",
    topic: " Clean Energy, Projects, Partnership",
    date: " 26 Jan 2023",
    url: "/Clean-Energy/9",
    imgSrc: clean3,
    tag: "Clean Energy",
  },
  {
    id: 10,
    heading:
      "Masdar, TotalEnergies, Siemens Energy and Marubeni to certify a novel pathway to make Sustainable Aviation Fuel (SAF) from methano",
    desc: "description",
    date: "25 Jan 2023",
    topic: " Clean Energy, Partnership, Projects",
    imgSrc: clean4,
    url: "/Clean-Energy/10",
    tag: "Clean Energy",
  },

  {
    id: 11,
    heading:
      "Masdar’s WiSER Annual Forum Explores Plans to Boost Women’s Leadership in Climate Adaptation at ADSW 2023",
    desc: "description",
    imgSrc: strategy1,
    date: "19 Jan 2023",
    topic: " Strategic Platforms, WiSER",
    url: "/Strategic-Platform/11",
    tag: "Strategic Platforms",
  },
  {
    id: 12,
    heading:
      "Abu Dhabi Sustainability Week 2023 to Set Agenda for Inclusive Climate Action",
    date: " 23 Dec 2022",
    topic: " Strategic Platforms, ADSW",
    url: "/Strategic-Platform/12",
    desc: "description",
    imgSrc: strategy2,
    tag: "Strategic Platforms",
  },
  {
    id: 13,
    heading:
      "Masdar Champions Women at Forefront of Global Net-Zero Transition at COP27",
    topic: "Strategic Platforms, WiSER",
    date: " 18 Nov 2022",
    url: "/Strategic-Platform/13",
    desc: "description",
    imgSrc: strategy3,
    tag: "Strategic Platforms",
  },

  {
    id: 14,
    heading:
      "Etihad Airways flies the world’s first flight using fuel made in the UAE from plants",
    url: "https://www.traveldailynews.com/regional-news/etihad-airways-flies-the-worlds-first-flight-using-fuel-made-in-the-uae-from-plants/",
    desc: "description",
    imgSrc: inthemedia1,
    tag: "In The Media",
  },
  {
    id: 15,
    heading: "Weekly renewables M&A round-up (Jan 14-20)",
    desc: "description",
    url: "https://www.traveldailynews.com/regional-news/etihad-airways-flies-the-worlds-first-flight-using-fuel-made-in-the-uae-from-plants/",
    imgSrc: inthemedia2,
    tag: "In The Media",
  },
];
export default data;
