const Theme =document.querySelector("[data-theme]");
const ThemeBtn =document.querySelector("[button-theme]");
const wrapperContainer=document.querySelector('.wrapper');
const topContainer=document.querySelector('.top-container');
const searchContainer=document.querySelector('.search-container');
const outputContainer=document.querySelector('.output-container');
const followContainer=document.querySelector('.follow-container');
const linksContainer=document.querySelector('.links-container');
const ThemeSelector=document.querySelector('[theme-selector]');

// dark and light mode interchange
let count=0;
function makeDark(){
    wrapperContainer.classList.add('dark');
    topContainer.classList.add('dark');
    searchContainer.classList.add('dark');
    outputContainer.classList.add('dark');
    linksContainer.classList.add('dark');
    followContainer.classList.add('dark');
    dataSearch.classList.add('dark');
    ThemeBtn.src="moonpng.svg";
    Theme.innerText='Dark';
}
function makeLight(){
    wrapperContainer.classList.remove('dark');
    topContainer.classList.remove('dark');
    searchContainer.classList.remove('dark');
    outputContainer.classList.remove('dark');
    linksContainer.classList.remove('dark');
    followContainer.classList.remove('dark');
    dataSearch.classList.remove('dark');
    ThemeBtn.src="sunpng.svg";
    Theme.innerText='Light';
}
function changeTheme(){
    if(count%2==1){
        makeLight();
    }
    else{
        makeDark();
    }
    count++;
}
ThemeSelector.addEventListener('click',changeTheme);

// searching by submitted value
let username="Ayush";
const url="https://api.github.com/users/";
function giturl(username){
    return url+username;
}
getData(giturl(username));

async function getData(giturl){
    try{
        let response= await fetch(giturl);
        let data= await response.json();
        if(!data){
         throw data;
        }
        updateData(data);
    }
    catch(e){
        console.log("fetch hi nhi hua sala");
    }
}

const userImage = document.querySelector('[user-image]');
const userName = document.querySelector('[user-name]');
const userId = document.querySelector('[user-id]');
const joinedDate = document.querySelector('[joined-date]');
const userBio = document.querySelector('[data-bio]');
const reposNum = document.querySelector('[data-repos]');
const followersNum = document.querySelector('[data-followers]');
const followingNum = document.querySelector('[data-following]');
const LocationCount = document.querySelector('[data-location]');
const blogLink = document.querySelector('[data-blog]');
const twitterLink = document.querySelector('[data-twitter]');
const companyName = document.querySelector('[data-addres]');

// value update fxn
function updateData(data){
userImage.src=`${data?.avatar_url}`;
userName.innerText=(data?.name === null) ? "~NOName~" :data?.name;
userId.href=`${data?.html_url}`;
userId.innerText=`@${data?.login}`;;
joinedDate.innerText=data?.created_at;
userBio.innerText= (data?.bio === null) ? "This Profile has no Bio" : data?.bio;
reposNum.innerText=data?.public_repos;
followersNum.innerText=data?.followers;
followingNum.innerText=data?.following;
LocationCount.innerText=(data?.location==null)?"Not defined": data?.location;
blogLink.href=`${data?.blog}`;
blogLink.innerText=(data?.blog==null)? "Not definerd":data?.blog;
twitterLink.href=`${data?.twiter_username}`;
twitterLink.innerText=(data?.twiter_username==null)?"Not defined":data?.twiter_username;
companyName.innerText=(data?.company==null)?"Not defined":data?.company;
}
const dataSearch=document.querySelector('[data-search]');
const SearchBtn=document.querySelector('[data-searchButton]');
// event listner for keydown and click on the input and button
SearchBtn.addEventListener('click', () => {
    if (dataSearch.value !== "") {
        getData(giturl(dataSearch.value));
    }
});
dataSearch.addEventListener('keydown', (e) => {
    // console.log(e.key);
    if (e.key === 'Enter') {
        if (dataSearch.value !== "") {
            getData(giturl(dataSearch.value));
        }
    }
});
