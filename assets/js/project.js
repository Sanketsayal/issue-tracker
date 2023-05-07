
function overlay(){
    document.getElementById('create-project').style.height="100vh";
    
}

function overlayHide(){
    document.getElementById('create-project').style.height="0";
}

function issuesHide(e){
    document.getElementById(e).classList.toggle("toogle-list");
}

function filterAuthor(){
    issuesHide('author-input');
    let data=document.getElementById('data-retrieve').getAttribute('data');
    data=JSON.parse(data);
    let author=document.getElementById('author-search').value;
    let newIssues=[];
    newIssues=data.filter((issue)=>issue.author==author);
    
    let show=document.getElementById('author-list');
    let html='';
    for(issue of data){
        if(issue.author==author){
            html+=`<div class="issue-card">
                    <h3>Title: ${issue.title} </h3>
                    <h3>Description: ${issue.description} </h3>
                    <h3>Label: ${issue.label}</h3>
                    <h3>Author: ${issue.author} </h3>
                </div>`
        }
    }
    show.innerHTML=html;
}
function filterTitle(){
    issuesHide('title-input');
    let data=document.getElementById('data-retrieve').getAttribute('data');
    data=JSON.parse(data);
    let title=document.getElementById('title-search').value;
    let newIssues=[];
    newIssues=data.filter((issue)=>issue.title==title);
    
    let show=document.getElementById('author-list');
    let html='';
    for(issue of data){
        if(issue.title==title){
            html+=`<div class="issue-card">
                    <h3>Title: ${issue.title} </h3>
                    <h3>Description: ${issue.description} </h3>
                    <h3>Label: ${issue.label}</h3>
                    <h3>Author: ${issue.author} </h3>
                </div>`
        }
    }
    show.innerHTML=html;
}

function filterLabel(){
    issuesHide('label-input');
    let data=document.getElementById('data-retrieve').getAttribute('data');
    data=JSON.parse(data);
    let title=document.querySelectorAll('input[type="checkbox"]:checked');
    let values=[]
    for(t of title){
        values.push(t.value);
    }
    console.log(values);
    let show=document.getElementById('author-list');
    let html='';
    for(issue of data){
        if(values.includes(issue.label)){
            html+=`<div class="issue-card">
                    <h3>Title: ${issue.title} </h3>
                    <h3>Description: ${issue.description} </h3>
                    <h3>Label: ${issue.label}</h3>
                    <h3>Author: ${issue.author} </h3>
                </div>`
        }
    }
    show.innerHTML=html;
}