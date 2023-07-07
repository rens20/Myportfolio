function createHttpRequest(method, url, callback) {
    const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var data = JSON.parse(xhr.responseText);
       callback(data)
    }
};
xhr.open(method, url, true);
xhr.send();
}

function createBlogPost(obj) {
    const { title, description, thumbNail, category, date } = obj;
    let parent = document.querySelector(".blog-posts-list");
    
    let container = document.createElement("li")
    container.className="blog-post-item";
    let link = document.createElement("a")
    link.href="#"
    let blogMeta = document.createElement("div")
    blogMeta.className="blog-meta"
    blogMeta.style.marginLeft="1rem"
    blogMeta.style.marginTop="1rem"
    blogMeta.style.marginBottom="-0.5rem"
    let categoryA = document.createElement("p")
    categoryA.className="blog-category"
    categoryA.innerHTML=category
    let spanA = document.createElement("span")
    spanA.className="dot"
    let dateA = document.createElement("time")
    dateA.datetime="2023-01-01"
    dateA.innerHTML=date
    
    let fig = document.createElement("figure")
    fig.className="blog-banner-box"
    let image = document.createElement("img")
    image.loading="lazy"
    image.alt="Img"
    image.src=thumbNail
    
    let content = document.createElement("div")
    content.className="blog-content"
    let descriptionA = document.createElement("p")
    descriptionA.className="blog-text"
    descriptionA.innerHTML=description
    let titleA = document.createElement("h3")
    titleA.className="h3 blog-item-title"
    titleA.innerHTML=title
    
    parent.appendChild(container)
    container.appendChild(link)
    link.appendChild(fig)
    link.appendChild(blogMeta)
    fig.appendChild(image)
    link.appendChild(content)
    content.appendChild(titleA)
    content.appendChild(descriptionA)
    blogMeta.appendChild(categoryA)
    blogMeta.appendChild(spanA)
    blogMeta.appendChild(dateA)
    
}

function createProjectDisplay(obj) {
    const { title, category, thumbNail, link } = obj;
    let parent = document.querySelector(".project-list");
    let container = document.createElement("li");
    container.className="project-item active";
    container.setAttribute("data-filter-item", true);
    container.setAttribute("data-category", category)
    let aTag = document.createElement("a");
    aTag.setAttribute("href", link);
    let figure = document.createElement("figure");
    figure.setAttribute("class", "project-img");
    let divTag = document.createElement("div");
    divTag.setAttribute("class", "project-item-icon-box");
    let ion = document.createElement("ion-icon");
    ion.setAttribute("name", "eye-outline");
    let image = document.createElement("img");
    image.setAttribute("src", thumbNail);
    image.setAttribute("alt", title);
    let titlee = document.createElement("h3");
    titlee.setAttribute("class", "project-title");
    titlee.innerHTML=title;
    let ctgy = document.createElement("p");
    ctgy.setAttribute("class", "project-category");
    ctgy.innerHTML=category;
    
    parent.appendChild(container);
    container.appendChild(aTag);
    aTag.appendChild(figure);
    figure.appendChild(divTag);
    divTag.appendChild(ion);
    figure.appendChild(image);
    aTag.appendChild(titlee)
    aTag.appendChild(ctgy)
}

createHttpRequest("GET", "https://libyzxy0.netlify.app/blogs.json",(data) => {
    for (let i = 0;i < data.length; i++) {
        createBlogPost({
        title: data[i].title, 
        description: data[i].description, 
        thumbNail: data[i].thumbNail, 
        category: data[i].category, 
        date: data[i].date
    })
    }
});

createHttpRequest("GET", "https://libyzxy0.netlify.app/projects.json",(data) => {
    for (let i = 0;i < data.length; i++) {
        createProjectDisplay({
        title: data[i].title, 
        category: data[i].category, 
        thumbNail: data[i].thumbNail, 
        link: data[i].link
})
    }
});



