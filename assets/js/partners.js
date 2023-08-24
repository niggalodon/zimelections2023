window.Apex = {
  dataLabels: {
    enabled: false
  }
};


let partnersData = [
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/kubatimg_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "Kubatana",
    "Para1": "Kubatana is a civic society information hub in Zimbabwe. For twenty years, this team has delivered credible, verified information to thousands of ..."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/magamimg_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "Magamba Network",
    "Para1": "Magamba Network is an award-winning organisation, using creative forms of youth activism aimed towards creating a democratic and just Zimbabwe."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/bstopimg_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "Bustop",
    "Para1": "We educate, entertain and provoke thought through skits, mockumentaries and tabloid news."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/citeimg_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "CiteZW",
    "Para1": "Our mission is to create space for creativity and promote “ARTIVISM” which is the creative integration of art and activism for social change."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/tellimg_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "TellZim",
    "Para1": "TellZim News is the leading news organization in the Southern region. It provides candid, balanced and timely news from the communities. Keeping it real. Committed to tell Zimbabwe."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/zimfactimg_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "ZimFact",
    "Para1": "ZimFact is Zimbabwe’s first national, independent and non-partisan fact-checking platform, launched in 2018."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/newshawks.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "NewsHawk",
    "Para1": "Zimbabwe's leading digital platform for investigative and breaking news. We're on the prowl"
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/erc_2.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "Election Resource Centre",
    "Para1": "The Election Resource Centre (ERC) is a think tank and advocacy organization on electoral and democracy issues in Zimbabwe that has been running for over a decade.",
    "Para2": "ERC exists to deepen electoral research work in Zimbabwe that informs effective citizen participation. ERC seeks to strengthen policy engagement towards improvement of the quality of electoral and democratic practices in the country.",
    "Para3": "ERC works throughout Zimbabwe working with collaborating partners who are also involved in the democracy and governance field."
  },
  {
    "Date": "10 January 2022",
    "Author": "Admin",
    "OriginalLink": "https://www.google.com",
    "CoverImage": "./images/zhrmp.jpg",
    "AuthorImage": "./images/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg",
    "Category": "Information",
    "Title": "Zimbabwe Human Rights Monitors Plartform(ZHRMP)",
    "Para1": "Zimbabwe Human Rights Monitors Plartform(ZHRMP)"
  }
]

let text = ""

//recoverd vs new cases mulit bar chart
function PartnersPage(BigBackgroundImage, Title, Author, Dates, Para1) {

  let t = 
      '<div class="row align-items-center">'+
      '<div class="col-lg-6">'+
      '<div class="about-img">'+
      '<img src="'+
      BigBackgroundImage+
      '" alt="About">'+
      '</div>'+
      '</div>'+
      '<div class="col-lg-6">'+
      '<div class="about-content">'+
      '<div class="section-title">'+
      '<span class="sub-title"></span>'+
      '<h2>'+
      Title+      
      '</h2>'+
      '<p>'+
      Para1+
      '</p>'+
      '</div>'+
      '<ul class="align-items-center">'+
      '<li>'+
      
      '<span>'+
      Author+
      '</span>'+
      '</li>'+
      '<li>'+
      '<h3>'+
      Dates+
      '</h3>'+      
      '</li>'+
      '</ul>'+
      '</div>'+
      '</div>'+
      '</div>';

  //update main header

  return t
}

partnersData.forEach(object => {
  text += PartnersPage(object.CoverImage, object.Title, object.Author, object.Date, object.Para1)
})

document.getElementById("partners").innerHTML = text;

/////End of Partners Page///









