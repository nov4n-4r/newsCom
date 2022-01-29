// NEWS API key :
function topicOnClick(btn) {
    for (
        let topicBtn of document.getElementsByClassName("topicBtn")
    ) {
        topicBtn.classList.remove("active")
    }
    btn.classList.add("active")
        // Use API
    fetch(`https://newsapi.org/v2/everything?q=${btn.dataset.target}&pageSize=8&sortBy=relevancy&apiKey`)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(res => {
            $("#result *").remove()
            console.log(res.articles)
            for (const news of res.articles) {
                $("#result").append(`
                    <a class="card mb-3" href="${news.url}">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${news.title}</h5>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </a>
                `)
            }
        })
}


fetch("https://newsapi.org/v2/top-headlines?pageSize=20&sortBy=popularity&country=id&apiKey")
    .then(res => res.json())
    .then(res => {
        // console.log(res);
        for (let news of res.articles) {
            $("#recommendation").append(`
            <div class="carousel-item">
                <img src="${news.urlToImage}" class="d-block rounded" alt="${news.title}" style="width:700px; height:400px">
                <div class="carousel-caption d-none d-md-block">
                    <a class="fw-bold" style="color:white" href="${news.url}">${news.title}</a>
                </div>
            </div>
            `)
        }

        $(".carousel-item")[0].classList.add("active")
    })
    .catch(exc => console.log(exc))

// fetch("https://newsapi.org/v2/top-headlines?page=2&pageSize=20&country=id&apiKey")
fetch("https://newsapi.org/v2/everything?sortBy=relevancy&q=technology&page=2&pageSize=20&apiKey")
    .catch(exc => console.log(exc))
    .then(res => res.json())
    .then(res => {
        for (const news of res.articles) {
            $("#latestNews").append(`
                    <a class="border-bottom border-danger border-2 mb-2 fw-bolder" href="${news.url}">${news.title}</a>
            `)
        }
    })

$("#searchBtn").click(function() {
    const query = $("#searchBar").val()
    $("#result *").remove()
    fetch(`https://newsapi.org/v2/everything?sortBy=relevancy&q=${query}&page=2&pageSize=20&apiKey`)
        .then(res => res.json())
        .then(res => {
            console.log(res.articles)
            for (const news of res.articles) {
                $("#result").append(`
                    <a class="card mb-3" href="${news.url}">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${news.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${news.title}</h5>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </a>
                `)
            }
        })
        .catch(exc => console.log(exc))
})