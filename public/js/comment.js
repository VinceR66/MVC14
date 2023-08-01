const newCommHandler = async function (event) {
    event.preventDefault();
    const formData = new FormData(this)
    const postId = this.dataset["post-id"];
    const comment = formData.get("comment").trim();
    console.log(this.dataset);


    if (comment) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',

            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
};



document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommHandler);


