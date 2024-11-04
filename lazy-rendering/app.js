document.addEventListener("DOMContentLoaded", function () {
    const comments = document.querySelectorAll(".comment");
    const initialRenderCount = 5;
  
    // Render the first few comments immediately
    comments.forEach((comment, index) => {
      if (index < initialRenderCount) {
        comment.classList.remove("hidden");
      } else {
        comment.classList.add("hidden");
      }
    });
  
    // Create an IntersectionObserver for lazy-rendering
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const comment = entry.target;
          comment.classList.remove("hidden");
          observer.unobserve(comment); // Stop observing once rendered
        }
      });
    }, { threshold: 0.1 });
  
    // Observe only the comments beyond the initial render count
    comments.forEach((comment, index) => {
      if (index >= initialRenderCount) {
        observer.observe(comment);
      }
    });
});
  