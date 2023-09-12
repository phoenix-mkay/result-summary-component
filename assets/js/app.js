const results = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]
  



const summaryContainer = document.querySelector('.subjects-score')

results.forEach(item =>{
    const subject = document.createElement('div')
    subject.classList.add("subject",`${item.category.toLowerCase()}`)
    subject.innerHTML = `
    <figure>
    <img src="${item.icon}" alt="reaction-icon" class="subject-icon reaction">
    <figcaption>${item.category}</figcaption>
    </figure>
    <p class="subject-score"><span class="bold">${item.score}</span> / 100</p>
    `
    summaryContainer.appendChild(subject)
})
const btn = document.createElement('button')
btn.classList.add("btn")
btn.innerHTML = `<a href="#">Continue</a>`
summaryContainer.appendChild(btn)