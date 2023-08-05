const newCommHandler = async function (event) {
    event.preventDefault();
    const formData = new FormData(this)
    const postId = this.dataset.postId;
    const comment = formData.get("comment").trim();
    console.log(this.dataset);


    if (comment && postId) {
        const response = await fetch(`/api/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create project');
        }
    }
};



document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommHandler);


