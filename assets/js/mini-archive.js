
let articlesData = [
  {
    "Date": "10 January 2022",
    "Author": "Thomas Madhuku",
    "OriginalLink": "ZimbabweansUnconvincedPOLADProposedElectoralReformsWillBeImplemented.html",
    "CoverImage": "./images/34.jpg",
    "AuthorImage": "./images/34.jpg",
    "Category": "Elections",
    "Title": "Zimbabweans Unconvinced POLAD Proposed Electoral Reforms Will Be Implemented",
    "Para1": "Zimbabweans have commented on the just released Political Actors Dialogue (POLAD) Declaration for Electoral Reforms which carries issues..."
  },
  {
    "Date": "20 December 2021",
    "Author": "Staff Reporter",
    "OriginalLink": "ZanuPFabusingstateresourcesinelectoralcampaigns.html",
    "CoverImage": "./images/34.jpg",
    "AuthorImage": "./images/34.jpg",
    "Category": "Elections",
    "Title": "Zanu PF abusing state resources in electoral campaigns",
    "Para1": "As the 2023 harmonized elections draw near and by-elections for vacant council and parliamentary seats are presumed to be a few months away..."
  },
  {
    "Date": "20 March 2022",
    "Author": "Staff Reporter",
    "OriginalLink": "PooraccesstopoliticalfinancenegativelyimpactsparticipationofoppositionpartiesinElectoralprocesses.html",
    "CoverImage": "./images/34.jpg",
    "AuthorImage": "./images/34.jpg",
    "Category": "Elections",
    "Title": "Poor access to political finance negatively impacts participation of opposition parties in Electoral processes",
    "Para1": "In terms of its 2013 Constitution, Zimbabwe holds local government, parliamentary and presidential elections every five years. Election..."
  }
]

let text = ""

//recoverd vs new cases mulit bar chart
function ArticlePage(BigBackgroundImage, Title, Author, Dates, Para1) {

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
      '<h5>'+
      Title+      
      '</h5>'+
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
      '<span>'+
      Dates+
      '</span>'+      
      '</li>'+
      '</ul>'+
      '</div>'+
      '</div>'+
      '</div>';

  //update main header

  return t
}

articlesData.forEach(object => {
  text += ArticlePage(object.CoverImage, object.Title, object.Author, object.Date, object.Para1)
})



document.getElementById("articles").innerHTML = text;

/////End of Partners Page///









