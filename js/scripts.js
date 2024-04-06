/*!
 * Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
  // שינוי הנתיב לכתובת URL של השרת שלך כאן
  fetch(
    "https://github.com/Alontsoran/Webdevsz/blob/bd44f653a6127e6a83ea5471dbfd2e2f2a8d656b/js/blog.json"
  )
    .then((response) => response.json())
    .then((blogsData) => {
      // טעינת הבלוגים לתוך תצוגת הדף
      var blogContainer = document.querySelector("#bzlogContainer");
      blogContainer.innerHTML = ""; // נקה את המכיל אם יש בו תוכן קודם

      // יצירת HTML לכל פוסט בלוג
      blogsData.forEach((blog) => {
        var blogElement = document.createElement("div");
        blogElement.classList.add("blog-post-summary");
        // שימוש במספר שב-JSON כדי ליצור קישור לבלוג המתאים
        var blogLink = `newblog/blog_${blog.blog_number}.html`;
        blogElement.innerHTML = `
             <div class="col-lg-4 mb-5" id="blogsz" onclick="window.open('${blogLink}', '_blank')>
                            <div class="card h-100 shadow border-0">
                            
                                <img class="card-img-top" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">לקריאה</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3" id="blog-summary">${blog.description}</div></a>
                                    <p class="card-text mb-0">${blog.content}</p> 


                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">${blog.author}</div>
                                                <div class="text-muted">${blog.date} , ${blog.time}</div>
                                               <a href="${blogLink}" class="read-more">קרא עוד</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
              
            `;
        blogContainer.appendChild(blogElement);
      });
    })
    .catch((error) => console.error("Error loading blog data:", error));
});
