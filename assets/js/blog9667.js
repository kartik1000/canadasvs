// AIzaSyCzJQV4Nwj_-uQtUCw4ZIkEMHi5F3ctCzg 
/*var current_page = 1 , x, a = [];

var post = new Object();
var records_per_page = 5;
window.onload = function() {
    $.ajax({
        type: 'GET',
        url: 'https://blogger.googleapis.com/v3/blogs/5386953102105479989/posts?fields=items.id&key=AIzaSyCFwqqiph_Zl6RdcjJtFx4YOOW3YZiBPYQ',
        
        success : function(data) { //add function for success
            //for(x in data.items){
            //a[x] = data.items[x];
            console.log("wf");
            //document.getElementById("content").innerHTML +=  data.items[0].id;
            

        },
    });
};console.log("wtd");

/*
function handleResponse(response) {
    document.getElementById("content").innerHTML += "<p>" + JSON.stringify(response) + "</p>";
  }

function handleResponse(response) {
  //var post_number = Object.keys(response.items).length; //number of posts
  for (i = 0; i < response.items.length; i++) {
    var titleHtml = '<div id="post' + (i + 1) + '" class="post"><p>' + response.items[i].title + '</p></div>';
    $('#content').append(titleHtml);
  }
}

var objJson = [
    { html:   " <article class=\"entry\"> <div class=\"entry-img\"> <img src=\"assets/img/blog-1.jpg\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\"entry-title\"> <a href=\"blog-single.html\">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\">John Doe</a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\">Jan 1, 2020</time></a></li> </ul> </div> <div class=\"entry-content\"> <p> Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta zena prista maraeda talan mas indera. </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { html:   " <article class=\"entry\"> <div class=\"entry-img\"> <img src=\"assets/img/blog-1.jpg\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\"entry-title\"> <a href=\"blog-single.html\">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\">John Doe</a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\">Jan 1, 2020</time></a></li> </ul> </div> <div class=\"entry-content\"> <p> Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta zena prista maraeda talan mas indera. </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { html:   " <article class=\"entry\"> <div class=\"entry-img\"> <img src=\"assets/img/blog-1.jpg\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\"entry-title\"> <a href=\"blog-single.html\">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\">John Doe</a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\">Jan 1, 2020</time></a></li> </ul> </div> <div class=\"entry-content\"> <p> Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta zena prista maraeda talan mas indera. </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { html:   " <article class=\"entry\"> <div class=\"entry-img\"> <img src=\"assets/img/blog-1.jpg\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\"entry-title\"> <a href=\"blog-single.html\">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\">John Doe</a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\">Jan 1, 2020</time></a></li> </ul> </div> <div class=\"entry-content\"> <p> Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta zena prista maraeda talan mas indera. </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
]; // Can be obtained from another source, such as your objJson variable*/
var current_page = 1;
var records_per_page = 12;
var x ,temp=[] , blog = [];
var objJson = [];

window.onload = starter();

function starter() {
    
    $.ajax({
        type: 'GET',
        url: 'https://blogger.googleapis.com/v3/blogs/5646292610921681548/posts?fetchImages=true&status=LIVE&key=AIzaSyCzJQV4Nwj_-uQtUCw4ZIkEMHi5F3ctCzg ',
        
        success : function(data) { //add function for success
            for(x in data.items){
            temp = data.items[x].updated.split('-'),
            blog.push({
            id    : data.items[x].id,
            title : data.items[x].title,
            image : data.items[x].images[0].url,
            author : data.items[x].author.displayName,
            updated : temp[0] + "-" + temp[1],
            });
        }
            //document.getElementById("content").innerHTML =  post.title;
            assignData();
        },
        error: (response) => {
            reject(response);
        }
    });   
}

function assignData()
{
for(x = 0; x< blog.length; x++){
 objJson.push(
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\" > </div> <h2 class=\entry-title\"> <a href=\"blog-single.html#" + blog[x].id + "\"> " + blog[x].title +"</a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> " + blog[x].author +"</li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i><time >" + blog[x].updated +"</time></a></li> </ul> </div>  <div class=\"read-more\"> <a href=\"blog-single.html#" + blog[x].id + "\">Read More</a>  </div> </article>"},
    );
    console.log(x);
    if(x == blog.length-1){
        console.log("called");
        changePage(1);
        }
}
console.log("loop end");}

function myFunction(y){
    console.log("clicked" + y);
}
  /*  { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\">"+ blog[x++].title +"</a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\"> </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"},
    { adName: "<article class=\"entry\"> <div class=\"entry-img\"> <img src=\""+ blog[x].image +  "\" alt=\"\" class=\"img-fluid\"> </div> <h2 class=\entry-title\"> <a href=\"blog-single.html\"></a> </h2> <div class=\"entry-meta\"> <ul> <li class=\"d-flex align-items-center\"><i class=\"icofont-user\"></i> <a href=\"blog-single.html\"></a></li> <li class=\"d-flex align-items-center\"><i class=\"icofont-wall-clock\"></i> <a href=\"blog-single.html\"><time datetime=\"2020-01-01\"></time></a></li> </ul> </div> <div class=\"entry-content\"> <p id = \"content\">wf </p> <div class=\"read-more\"> <a href=\"blog-single.html\">Read More</a> </div> </div> </article>"}
]; // Can be obtained from another source, such as your objJson variable
}*/

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < blog.length; i++) {
        console.log(i);
        listing_table.innerHTML += "<div  class=\"col-lg-4  col-md-6 d-flex align-items-stretch\" data-aos=\"fade-up\">" +objJson[i].adName + "</div>" ;
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}
    /*
window.onload = function() {
    changePage(1);
};*/