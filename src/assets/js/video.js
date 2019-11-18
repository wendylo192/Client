window.onload = init;

const FULL_SIZE = 580;
let video, reproductor, container, playlist;
let minutes = 0,
    seconds = "00";
let correctAnswer = -1,
    score = 0,
    selectedAnswer = 0;
let item = [];
let questions = [{
        title: "¿Y qué esperas para volverte Premium?",
        answer: ["Hagámoslo",
            "Estoy Probando"
        ],
        correctAnswer: 1
    },
    {
        title: 'Hola!¿Sabias que siendo Premium no recibiras estos mensajes?',
        answer: ["Quiero ser Premium",
            "Más tarde"
        ],
        correctAnswer: 1
    }, {
        title: "¿Quisieras ver los últimos estrenos de cine?",
        answer: ["Si, quiero ser Premium",
            "Tal vez luego"
        ],
        correctAnswer: 1
    }, {
        title: '¿Quieres ver más de 60 minutos de contenido?',
        answer: ['Por favor, pásame a Premium',
            'En un ratito'
        ],
        correctAnswer: 1
    }
];

let sources = [{
        name: "buck bunny",
        src: "https://buckbunny2.s3-sa-east-1.amazonaws.com/BigBuckBunny_320x180.mp4"
    },
    {
        name: "sintel",
        src: "https://mainline.i3s.unice.fr/mooc/week2p1/video4.mp4"
    },
    {
        name: "caminandes",
        src: "https://mainline.i3s.unice.fr/mooc/week2p1/video2.mp4"
    }
];

function init() {
    video = document.querySelector("#myVideo");
    reproductor = document.querySelector("#reproductor");
    container = document.querySelector(".container");
    // playlist = document.querySelectorAll('.playlist  [class*="itm"]');
    let progress = document.querySelector(".progress").addEventListener('click', seek);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("timeupdate", updateProgressBar);
    video.addEventListener("mouseenter", showControls);
    reproductor.addEventListener("mouseleave", hideControls);
    video.addEventListener("timeupdate", quizBuilder);
    video.addEventListener("ended", showFinalScore);

    playlist.forEach(function(item) {
        item.addEventListener('click', playNextVideo);
    });
}

function updateProgressBar() {
    let duration = Math.floor(video.duration);
    let prog = document.querySelector(".completed");
    let widthBar = (video.currentTime * FULL_SIZE) / duration;
    prog.style.width = widthBar + "px";

}

function showControls(e) {
    container.classList.remove("disappear");
    container.classList.add("appear");
    e.stopPropagation();
}

function hideControls(e) {
    container.classList.remove("appear")
    container.classList.add("disappear");

    e.stopPropagation();
}

function updateTime() {
    let timestamp = document.querySelector(".timestamp");

    seconds = ("0" + (Math.floor(video.currentTime) % 60)).slice(-2);
    minutes = ("0" + Math.floor(video.currentTime / 60)).slice(-2);

    timestamp.innerHTML = minutes + ":" + seconds;
}

//CONTROLS FUNCTIONS

function playVideo() {
    video.play();
}

function stopVideo() { // backs to start
    video.currentTime = 0;
    video.pause();
}

function pauseVideo() {
    video.pause();
}

function stepBackwards() {
    if (video.currentTime < 10) {
        video.currentTime = 0;
        return;
    }
    video.currentTime -= 10;
}

function stepForward() {
    if ((video.currentTime + 10) > video.duration) {
        video.currentTime = video.duration;
    }
    video.currentTime += 10;
}

function handledVolume(value) {
    let volume = document.querySelector("#volume");

    if (value < 0.2) {
        volume.classList.replace("fa-volume-down", "fa-volume-off");
    } else if (value > 0.5) {
        volume.classList.replace("fa-volume-down", "fa-volume-up");
    } else if (value < 0.5 && value > 0.2) {
        volume.classList.remove("fa-volume-up");
        volume.classList.remove("fa-volume-off");
        volume.classList.add("fa-volume-down");
    }
    video.volume = value;
}

function seek(e) {
    var rect = e.target.getBoundingClientRect();
    let duration = Math.floor(video.duration);

    video.currentTime = (e.clientX - rect.left) * duration / FULL_SIZE;
}

//PLAYLIST

function playNextVideo(event) {
    switch (event.target.alt) {
        case "buckbunny":
            video.src = sources[0].src;
            break;
        case "sintel":
            video.src = sources[1].src;
            break;
        case "caminandes":
            video.src = sources[2].src;
            break;
    }
    video.play();
}

//THE QUIZ

function quiz(question) {


    let quizDiv = document.createElement("div");
    let button = document.createElement("button");
    let ul = document.createElement("ul");

    let span = [];
    let title = document.createElement("h2");

    quizDiv.setAttribute("id", "quizDiv");
    button.setAttribute("class", "qbutton");
    ul.setAttribute("class", "qul");

    for (var i = 0; i < 2; i++) {
        item[i] = document.createElement("li");
        item[i].setAttribute('id', "item" + (i + 1));
        item[i].addEventListener("click", selectAnswer);
        item[i].innerHTML = question.answer[i];
    }

    title.innerHTML = question.title;


    item.forEach(function(b, index) {
        ul.append(item[index]);
    });

    quizDiv.append(title);
    quizDiv.append(ul);

    button.setAttribute("id", "check");
    button.addEventListener("click", checkAnswer);
    button.innerHTML = "OK";
    quizDiv.appendChild(button);

    document.body.append(quizDiv);
}


function destroyQuiz() {

}

let flag = 0;

function quizBuilder() {
    if ((minutes == 0 && seconds == 5) && flag === 0) {
        video.pause();
        quiz(questions[0]);
        correctAnswer = questions[0].correctAnswer;
        console.log("QUIZBUILDER: " + minutes + seconds);
        flag++;
    } else if ((minutes == 00 && seconds == 30) && flag === 1) {
        video.pause();
        quiz(questions[1]);
        correctAnswer = questions[2].correctAnswer;
        console.log("QUIZBUILDER: " + minutes + seconds);
        flag++;
    } else if ((minutes == 1 && seconds == 00) && flag === 2) {
        video.pause();
        quiz(questions[2]);
        correctAnswer = questions[2].correctAnswer;
        console.log("QUIZBUILDER: " + minutes + seconds);
        flag++;
    } else if ((minutes == 1 && seconds == 30) && flag === 3) {
        video.pause();
        quiz(questions[3]);
        correctAnswer = questions[3].correctAnswer;
        console.log("QUIZBUILDER: " + minutes + seconds);
        flag++;
    } else if ((minutes == 2 && seconds == 00)) {
        video.pause();
        showFinalScore();
        console.log("QUIZBUILDER: " + minutes + seconds);
    }
}

function selectAnswer(event) {
    console.log(event.target.id);
    selectedAnswer = event.target.id.substring(event.target.id.length - 1);

}

function checkAnswer(event) {
    if (selectedAnswer === 0) {
        console.log("Must choose at least one");
        return;
    } else if (selectedAnswer == correctAnswer) {
        score++;
        item[selectedAnswer - 1].style.backgroundColor = "green";
    } else {
        item[selectedAnswer - 1].style.backgroundColor = "red";
    }

    setTimeout(function() {
        document.querySelector("#quizDiv").remove();
    }, 1000)
    playVideo();
}

//SHOW FINAL SCORE

function showFinalScore() {
    var div = document.createElement("div");
    var title = document.createElement("h1");

    title.innerHTML = "Debes Pasarte a Premium para seguir viendo este contenido";
    div.append(title);
    div.setAttribute("id", "PremiumDiv");

    document.body.append(div);
}