let myAccount = 'keev4493'

let posts = [
    {
        'profilepicture': './img/post1-profilepicture.jpeg',
        'author': 'activeprogrammer',
        'location': '',
        'image': './img/post1.png',
        'likes': 2102,
        'description': 'Developers Setup',
        'comment-name': ['rodrigoporto13'],
        'comments': ['this view 😍'],
    },
    {
        'profilepicture': './img/post2-profilepicture.jpeg',
        'author': 'johnnyedlind',
        'location': 'Milos, Greece',
        'image': './img/post2.png',
        'likes': 25990,
        'description': 'Once upon a time I was up side down in Milos',
        'comment-name': ['iamrohitdhawan'],
        'comments': ['Awesome photo man 🔥'],
    },
    {
        'profilepicture': './img/post3-profilepicture.jpeg',
        'author': 'kdigitalstudio',
        'location': '',
        'image': './img/post3.png',
        'likes': 415,
        'description': 'A full setup and tour of the digital reading journal is now up over on YouTube! Use the link in my bio to watch 💜',
        'comment-name': ['nuumorais'],
        'comments': ['I loved the video!! 😍👏'],
    },
];


function renderPosts() {
    document.getElementById('timeline-container').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('timeline-container').innerHTML += template(post, i);

        if (post.like_on) {
            document.getElementById(`like-icon-${i}`).src = `icons/liked-icon.svg`;
        } else {
            document.getElementById(`like-icon-${i}`).src = `icons/like-icon.svg`;
        }
    }
}


function template(post, i) {
    return /*html*/ `

    <div class="post-container">
        <div class="post-header-container">
            <div class="profile">
                <img src="${post['profilepicture']}" alt="">
                <div>
                    <div>${post['author']}</div>
                    <div class="location">${post['location']}</div>
                </div>
            </div>
            <div class="setting-container">
                <img src="./icons/dots-icon.svg" alt="">
            </div>
        </div>
        <div class="post-image-container">
            <img src="${post['image']}" alt="">
        </div>
        <div class="interact-container">
            <div>
                <img onclick="likePost(${i})" id="like-icon-${i}" src="./icons/like-icon.svg" alt="">
                <img onclick="showCommentSection(${i})" class="chat-bubble" src="./icons/chat-bubble-icon.svg" alt="">
                <img src="./icons/messages-icon.svg" alt="">
            </div>
            <div>
                <img onclick="changeBookmarkIcon(${i})" id="bookmark-icon-${i}" src="./icons/bookmark-icon.svg" alt="">
            </div>
        </div>
        <div class="likes-container">
            <p>Gefällt ${new Intl.NumberFormat().format(posts[i].likes)} Mal</p>
        </div>
        <div class="description-container">
            <b>${post['author']}</b>
            ${post['description']}
        </div>
        <div class="comment-container">
            ${renderComments(i)}
        </div>
        <div id="write-comment-container-${i}" class="write-comment-container d-none">
            <input id="comment-inputfield-${i}" class="comment-inputfield" type="text" placeholder="Kommentieren ...">
            <button onclick="addNewComment(${i})" class="post-button">Posten</button>
        </div>
    </div>
    `;
}


function addNewComment(i) {
    let newComment = document.getElementById(`comment-inputfield-${i}`);

    if (newComment.value == '') {
        alert("Bitte gib einen Kommentar ein!");
    } else {
        posts[i]['comments'].push(newComment.value);
        posts[i]['comment-name'].push(myAccount);
        newComment.value = '';

        renderPosts();
    }
}


function renderComments(i) {
    let template = '';

    for (let u = 0; u < posts[i]['comments'].length; u++) {
        template += /*html*/ `
            <div>
                <p class="comment-author">${posts[i]['comment-name'][u]}</p>
                <p>${posts[i]['comments'][u]}</p>
            </div>
        `;
    }
    return template;
}


// Bookmark Icon verändern:
bookmark_on = true;

function changeBookmarkIcon(i) {
    if (bookmark_on == true) {
        document.getElementById(`bookmark-icon-${i}`).src = `icons/bookmarked-icon.svg`;
        bookmark_on = false;
    } else {
        document.getElementById(`bookmark-icon-${i}`).src = `icons/bookmark-icon.svg`;
        bookmark_on = true;
    }
}


// Post Liken:
like_on = true;

function likePost(i) {
    if (like_on == true) {
        posts[i].likes = posts[i].likes + 1;
        posts[i].like_on = true;
        like_on = false;
    } else {
        posts[i].likes = posts[i].likes - 1;;
        posts[i].like_on = false;
        like_on = true;
    }
    renderPosts();
}


// Kommentarfunktion einblenden:
function showCommentSection(i) {
    let commentSection = document.getElementById(`write-comment-container-${i}`)

    commentSection.classList.toggle('d-none');
}





