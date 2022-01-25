function topicOnClick(btn) {
    for (
        let topicBtn of document.getElementsByClassName("topicBtn")
    ) {
        topicBtn.classList.remove("active")
    }
    btn.classList.add("active")
        // Use API
}

// NEWS API key : 991ee35465c3447aaaf087cdded92e60

fetch("https://newsapi.org/v2/top-headlines?pageSize=8&sortBy=popularity&country=id&apiKey=991ee35465c3447aaaf087cdded92e60")
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

fetch("https://newsapi.org/v2/top-headlines?pageSize=20&country=id&apiKey=991ee35465c3447aaaf087cdded92e60")
    .catch(exc => console.log(exc))
    .then(res => res.json())
    .then(res => {
        for (const news of res.articles) {
            $("#latestNews").append(`
                    <a href="">${news.title}</a>
            `)
        }
    })