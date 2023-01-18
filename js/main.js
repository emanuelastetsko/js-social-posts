const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Array con lista di id dei post piaciuti
let postsLiked = [];

// Contatore dei like
let counterLike = 0;

for (let index = 0; index < posts.length; index++) {
    let container = document.getElementById("container");

    // Post
    let post = document.createElement("div");
    post.classList.add("post");
    container.append(post);

    // Post__header 
    let postHeader = document.createElement("div");
    postHeader.classList.add("post__header");
    post.append(postHeader);

    // Post-meta
    let postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    postHeader.append(postMeta);

    // Post-meta__icon 
    let postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    postMeta.append(postMetaIcon);

    // Profile-pic
    let profilePic = document.createElement("img");
    profilePic.classList.add("profile-pic");
    profilePic.src = posts[index]["author"]["image"];
    postMetaIcon.append(profilePic);

    // Post-meta__data
    let postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    postMeta.append(postMetaData);

    // Post-meta__author
    let postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaAuthor.innerHTML = posts[index]["author"]["name"];
    postMetaData.append(postMetaAuthor);

    // Post-meta__time
    let postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    postMetaTime.innerHTML = posts[index]["created"];  //!!! Calcolare poi quanto tempo è passato
    postMetaData.append(postMetaTime);

    // Post__text 
    let postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.innerHTML = posts[index]["content"];
    post.append(postText);

    // Post__image 
    let postImage = document.createElement("div");
    postImage.classList.add("post__image");
    post.append(postImage);

    // Image
    let img = document.createElement("img");
    img.src = posts[index]["media"];
    postImage.append(img);

    // Post__footer 
    let postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");
    post.append(postFooter);

    // Likes
    let likes = document.createElement("div");
    likes.classList.add("likes");
    postFooter.append(likes);

    // Likes__cta
    let likesCta = document.createElement("div");
    likesCta.classList.add("likes_cta");
    likes.append(likesCta);

    // Like-button 
    let likeButton = document.createElement("a");
    likeButton.classList.add("like-button");
    likeButton.innerHTML += `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>`;
    likesCta.append(likeButton);

    // Like-button-label
    let likeButtonLabel = document.createElement("span");
    likeButtonLabel.classList.add("like-button__label");
    likeButtonLabel.innerHTML = " Mi piace";
    likeButton.append(likeButtonLabel);

    //Like__counter
    let likeCounter = document.createElement("div");
    likeCounter.classList.add("like__counter");
    likeCounter.innerHTML = "Piace a " + posts[index]["likes"] + " persone";
    likes.append(likeCounter);


    // Al click del bottone cambiare il colore a quest'ultimo
    likeButton.addEventListener("click", 
          
        function () {

            if (likeButton.classList.contains("like-button--liked")) {
                likeButton.classList.remove("like-button--liked");
                counterLike--;
                likeCounter.innerHTML = "Piace a " + (posts[index]["likes"] - counterLike)  + " persone";

            }
            else {
                likeButton.classList.add("like-button--liked");
                counterLike++;
                likeCounter.innerHTML = "Piace a " + (counterLike + posts[index]["likes"])  + " persone";
                postsLiked.push(posts[index]["id"]);
                console.log("postsLiked", postsLiked);
            } 
        }
    )
}