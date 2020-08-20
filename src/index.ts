// arr: '1mYsTxnqsietFxj1OgoGbG'
// sana: '5FVBduYaeVBb6JIghza7v6'
// arivu: '7rVV9d6vc4FLT752uRuk71'
// hiphop: '7zFBW2JxM4bgTTKxCRcS8Q'
// yogib: '614RN5ndeqpLlqg1yDbjtm'
// yuvan: '6AiX12wXdXFoGJ2vk8zBjy'
// ilayaraja: '3m49WVMU4zCkaVEKb8kFW7'

var artistsIds = ['1mYsTxnqsietFxj1OgoGbG', '5FVBduYaeVBb6JIghza7v6', '7rVV9d6vc4FLT752uRuk71', '7zFBW2JxM4bgTTKxCRcS8Q','614RN5ndeqpLlqg1yDbjtm','6AiX12wXdXFoGJ2vk8zBjy','3m49WVMU4zCkaVEKb8kFW7']
var folder = document.getElementById('folder');
var arrayArtists = [];
var array =[];

async function getToken(){
    try{
        const clientId = '9a65f9a7001c4cdfa8a9b2bf105df65d';
        const clientSecret = '638fe2a6de504112824880ab4c2fbd1b';
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        const accessToken = data.access_token;
        (<HTMLElement>document.getElementById('artistsId')).addEventListener('click', () => {
            (<HTMLElement>document.getElementById("folder")).innerHTML="";
            getArtists(accessToken);
        });
        (<HTMLElement>document.getElementById('genreId')).addEventListener('click', () => {
            (<HTMLElement>document.getElementById("folder")).innerHTML="";
            getGenres(accessToken);
        });
    }
    catch{
        alert('Try loading the page once again');
    }
}

async function getArtists(token: string){ 

    for(let i=0;i<artistsIds.length;i++){
        let id=artistsIds[i];
    const result = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
    
    (<HTMLElement>document.getElementById("folder")).insertAdjacentHTML('beforeend', `<option id="f1" value=${i}>${data.name}</option>`);
    console.log(i);
    arrayArtists.push(data.name);
}
arrayArtists = [];
(<HTMLElement>document.getElementById('folder')).addEventListener('click', () => {
    let value = (<HTMLSelectElement>document.getElementById('f1')).id;
    console.log(value);
});
}   

async function getArtistsAlbums(token: string,id:string){
    const result = await fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const genreData = await result.json();
}

async function getAlbumTrackList(token: string,id:string){
    const result = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const genreData = await result.json();
}

async function getTrack(token: string){
    const result = await fetch(`https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
}

async function getGenres(token: string){ 
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
    const genreArray = data.categories.items;
    const len = (data.categories.items).length;
    for(let i=0;i<len;i++)
    {
        (<HTMLElement>document.getElementById("folder")).insertAdjacentHTML('beforeend', `<option value=${i}>${data.categories.items[i].name}</option>`);
    }
}  
async function getGenresPlaylist(token: string,genreId: string){ 
    const limit = 10;
        
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.playlists.items;
}  