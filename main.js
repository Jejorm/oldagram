import { posts } from '/posts.js'

function incrementLikes() {

    posts.forEach(({ name }, index) => {

        let likes = posts[index].likes

        const id = name.split(' ')[0].toLowerCase()

        const postImage = document.getElementById(`${id}-post-image`)
        const likesElement = document.getElementById(`${id}-likes`)

        postImage.addEventListener('dblclick', () => {
            likes++
            likesElement.textContent = `${likes} likes`
        })
    })
}

let htmlToRender = ''

const containerEl = document.getElementById('container')

for (const post of posts) {

    const { name, username, location, avatarImage, postImage, comment, likes } = post

    const id = name.split(' ')[0].toLowerCase()

    htmlToRender += `
        <section>
            <div class="profile-information-container">
                <img class="avatar" src=${avatarImage} alt="${name} avatar">
                <div>
                    <p>${name}</p>
                    <p>${location}</p>
                </div>
            </div>
            <img id="${id}-post-image" src=${postImage} alt="${name} post">
        </section>
        <section class="post-information-container">
            <div class="post-icons-container">
                <img src="/images/icon-heart.png" alt="heart icon">
                <img src="/images/icon-comment.png" alt="comment icon">
                <img src="/images/icon-dm.png" alt="share icon">
            </div>
            <p id="${id}-likes">${likes} likes</p>
            <p><span>${username} ${comment}</p>
        </section>
    `
}

containerEl.innerHTML += htmlToRender

document.addEventListener('DOMContentLoaded', incrementLikes)