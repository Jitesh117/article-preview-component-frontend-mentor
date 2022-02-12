
function hide() {
    let alt = document.getElementById("profile-alt");
    let prof = document.getElementById("profile");
    
    prof.style.display= 'none';
    alt.style.display = 'flex';
}
function unhide()
{
    let alt = document.getElementById("profile-alt");
    let prof = document.getElementById("profile");
    
    prof.style.display= 'flex';
    alt.style.display= 'none';
}
