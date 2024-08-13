document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const blogContent = document.querySelector(".disblog");
    const originalContent = blogContent.innerHTML; 

    function search() {
        const query = searchInput.value.toLowerCase().trim();

        blogContent.innerHTML = originalContent;

        if (query) {
            const regex = new RegExp(query, "gi");
            const highlightedContent = blogContent.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
            blogContent.innerHTML = highlightedContent;

            const firstHighlight = document.querySelector(".highlight");
            if (firstHighlight) {
                firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }

    function toggleSearch() {
        if (searchInput.classList.contains("visible")) {
            search();
        } else {
            searchInput.classList.add("visible");
            searchInput.focus();
        }
    }

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });

    window.search = search;
    window.toggleSearch = toggleSearch;
});


document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");
    const commentsContainer = document.getElementById("comments-container");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting

        const commentText = document.getElementById("comment").value.trim();

        if (commentText) {
            // Create a new comment element
            const newComment = document.createElement("p");
            newComment.textContent = commentText;
            newComment.classList.add("comment");

            // Append the new comment to the comments container
            commentsContainer.appendChild(newComment);

            // Clear the comment input
            document.getElementById("comment").value = "";
        }
    });
});