page_title = document.getElementsByTagName("HEAD")[0].innerHTML;
page_name = document.getElementsByTagName("TITLE")[0].innerHTML;

document.getElementsByTagName("HEAD")[0].innerHTML = page_title +
"\
  \<meta charset\=\"UTF-8\"\>\
  \<meta name\=\"viewport\" content\=\"width\=device-width, initial-scale\=1.0\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/bootstrap.min.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/meanmenu.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/animate.min.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/odometer.min.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/modal-video.min.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/nice-select.min.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/style.css\"\>\
  \<link rel\=\"stylesheet\" href\=\"./assets/css/responsive.css\"\>\
  \<link rel\=\"icon\" type\=\"image/png\" href\=\"./assets/images/favicon.png\"\>\
";

document.getElementById("navbar").innerHTML = 
"\
  \<div class\=\"mobile-nav\"\>\
    \<a href\=\"index.html\" class\=\"logo\"\>\
      \<img src\=\"./assets/images/logo.png\" alt\=\"Logo\"\>\
    \</a\>\
  \</div\>\
  \<div class\=\"main-nav\"\>\
    \<div class\=\"container\"\>\
      \<nav class\=\"navbar navbar-expand-md navbar-light\"\>\
        \<a class\=\"navbar-brand\" href\=\"index.html\"\>\
          \<img src\=\"./assets/images/logo.png\" alt\=\"Logo\"\>\
        \</a\>\
        \<div class\=\"collapse navbar-collapse mean-menu\" id\=\"navbarSupportedContent\" style\=\"display: block;\"\>\
          \<ul class\=\"navbar-nav\"\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"index.html\" class\=\"nav-link\"\>\Home\</a\>\
            \</li\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"dashboard.html\" class\=\"nav-link \"\>\Election DashBoard\</a\>\
            \</li\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"vdashboard.html\" class\=\"nav-link\"\>\Violence Tracker\</a\>\
            \</li\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"archives.html\" class\=\"nav-link\"\>\Blog\</a\>\
            \</li\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"partners.html\" class\=\"nav-link \"\>\Partners\</a\>\
            \</li\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"AboutUs.html\" class\=\"nav-link \"\>\About Us\</a\>\
            \</li\>\
            \<li class\=\"nav-item\"\>\
              \<a href\=\"contact.html\" class\=\"nav-link\"\>\Contact\</a\>\
            \</li\>\
          \</ul\>\
          \<div class\=\"side-nav\"\>\
          \</div\>\
        \</div\>\
      \</nav\>\
    \</div\>\
  \</div\>\
";

document.getElementById("footer").innerHTML = 
"\
  \<div class\=\"container\"\>\
    \<div class\=\"row\"\>\
      \<div class\=\"col-sm-6 col-lg-3\"\>\
        \<div class\=\"footer-item\"\>\
          \<div class\=\"footer-logo\"\>\
            \<a class\=\"logo\" href\=\"index.html\"\>\
              \<img src\=\"./assets/images/logo.png\" alt\=\"Logo\"\>\
            \</a\>\
            \<p\>\</p\>\
          \</div\>\
        \</div\>\
      \</div\>\
      \<div class\=\"col-sm-6 col-lg-3\"\>\
        \<div class\=\"footer-item\"\>\
          \<div class\=\"footer-contact\"\>\
            \<h3\>Contact Info\</h3\>\
            \<p\>Content Creators\</p\>\
            \<ul\>\
              \<li\>\
                \<a href\=\"#\"\>3 Allan Willson Begravia,HRE, ZW\</a\>\
              \</li\>\
              \<li\>\
                \<a href\=\"tel:+0015481592491\"\>+263-08644- 076265\</a\>\
              \</li\>\
              \<li\>\
                \<a href\=\"#mailto:info@zimbabweelections2023.co.zw\"\>info@zimbabweelections2023.co.zw\</a\>\
              \</li\>\
            \</ul\>\
          \</div\>\
        \</div\>\
      \</div\>\
      \<div class\=\"col-sm-6 col-lg-2\"\>\
        \<div class\=\"footer-item\"\>\
          \<div class\=\"footer-link\"\>\
          \</div\>\
        \</div\>\
      \</div\>\
      \<div class\=\"col-sm-6 col-lg-4\"\>\
        \<div class\=\"footer-item\"\>\
          \<div class\=\"footer-events\"\>\
          \</div\>\
        \</div\>\
      \</div\>\
    \</div\>\
  \</div\>\
  \<div class\=\"copyright-area two\"\>\
    \<div class\=\"container\"\>\
      \<p\>Creative Commons 2023\</p\>\
    \</div\>\
  \</div\>\
";

document.getElementById("go-top").innerHTML = 
"\
  \<i class\=\"icofont-polygonal\"\>\</i\>\
  \<i class\=\"icofont-polygonal\"\>\</i\>\
";

document.getElementsByTagName("TITLE")[0].innerHTML = page_name + " | Zimbabwe Elections 2023";

document.getElementById("page-title").innerHTML = 
"\
\<div class\=\"container\"\>\
  \<div class\=\"row align-items-center\"\>\
    \<div class\=\"col-lg-12\"\>\
      \<div class\=\"about-content\"\>\
        \<div class\=\"section-title\"\>\
          \<h2 class\=\"sub-title\"\>\
            " + page_name + "\
          \</h2\>\
        \</div\>\
      \</div\>\
    \</div\>\
  \</div\>\
\</div\>\
";