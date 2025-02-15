const febHolidays = [
    "Dearest Pichi, I can not think of a life without you!",
    "I think about you the moment I wake up and also the moment just before I sleep",
    "You are the best thing that has happened to me",
    "I hope we stay together forever 💕",
    "And you keep staring me from the corner of your beautiful eyes",
    "You make my life sooooo much better🥰",
    "It is impossible for me to think of a life without you",
    "Well, all 9 of yours too hehe 3:)",
    "You are my soulmate ✨💕",
    "Your face is the only thing I want to look at all the time😍",
    "You give me butterflies",
    "And high BP at times 0:)",
    "But I can not stop doing our cute things🥰",
    "I really miss your presence peach🥺",
    "Yu iz funni",
    "And your laughter is the sweetest sound in the universe🤞",
    "I would do all kinds of stupid things to make you laugh😍",
    "I will be the happiest man the day we become one🥰",
    "I am so grateful I met you❤️",
    "I will always do my best to keep you happy babe",
    "You are a gift of god to me :')",
    "Keep shining my sunshine and your sunflower will keep looking at you💓",
    "You are the closest person in my life🥰",
    "I don't ever want to lose you😒",
    "And trust me I do not want anyone else",
    "I will become the person you want for yourself❤️",
    "Your little appreciation makes me want to go miles ahead🥰",
    "I absolutely love your kisses",
    "You make my heart pound💖",
    "The best place to be in is in your arms",
    "I want to hug you right now :c,
    "I wish I spend every second of my life with you💓",
    "I am all yours and will always be",
    "I will try harder to express my love for you",
    "Because I can never afford to lose you",
    "I love the way you taste😘",
    "You are precious my love💖",
    "Yu r mst welcom to irritet the seet out of mi❤",
    "Mi bil olso not mees chans to irritet yu",
    "I pray to god that we spend our lives together laughing and supporting each other🙏",
    "Now I conclude by saying that",
    "I Love You Very Much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
