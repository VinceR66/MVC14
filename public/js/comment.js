/*const newCommHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#project-comm').value.trim();


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
    .querySelector('.new-project-comm')
    .addEventListener('submit', newCommHandler);

*/