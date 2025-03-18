
const linesInfo = [
    {
    id: "alfa",
    name: "Alfa ELD",
    lineNumber: "710",
    lineEmail: "support@alfaeld.com",
    linePhone: "+1(469)445-27-57",
    linePrefix: "06",
    lineSales: "725",
    },
    {
    id: "vista",
    name: "Vista ELD",
    lineNumber: "720",
    lineEmail: "support@vistaeld.com",
    linePhone: "+1(614)362-22-23",
    linePrefix: "09",
    lineSales: "726",
    },
    {
    id: "swift",
    name: "Swift ELD",
    lineNumber: "740",
    lineEmail: "support@swifteld.com",
    linePhone: "+1(678)387-51-75",
    linePrefix: "08",
    lineSales: "728",
    },
    {
    id: "sharp",
    name: "Sharp ELD",
    lineNumber: "766",
    lineEmail: "support@sharpeld.com",
    linePhone: "+1(862)208-38-48",
    linePrefix: "03",
    lineSales: "755",
    },
    {
    id: "TE",
    name: "Trackensure ELD",
    lineNumber: "700",
    lineEmail: "safety.trackensure@gmail.com",
    linePhone: "+1(916)860-1234",
    linePrefix: "-",
    lineSales: "704",
    },
    {
    id: "TERU",
    name: "Trackensure RU/URK ELD",
    lineNumber: "701",
    lineEmail: "safety.trackensure@gmail.com",
    linePhone: "+1(916)860-1234",
    linePrefix: "-",
    lineSales: "704",
    },
    {
    id: "CB",
    name: "Callback",
    lineNumber: "800",
    lineEmail: "safety.trackensure@gmail.com",
    linePhone: "+1(916)860-1234",
    linePrefix: "-",
    lineSales: "704",
    },
    {
    id: "CBRU",
    name: "Callback RU/UKR",
    lineNumber: "801",
    lineEmail: "safety.trackensure@gmail.com",
    linePhone: "+1(916)860-1234",
    linePrefix: "-",
    lineSales: "704",
    }
]
const linesBlock = document.getElementById("lines");


//Відкритяя/закриття інформації про лінію
function infoClick(id) {
    const elem = document.getElementById(id);
    elem.classList.toggle('is-hidden');
}

//Відкриття/закриття блоку з дзвінками
function queueClick(id1, id2) {
    const queue = document.getElementById(id1);
    const block = document.getElementById(id2);
    queue.classList.toggle('is-hidden');
    if (block.style.marginBottom > "30px") {
        block.style.marginBottom = "30px";
    } else {
        block.style.marginBottom = "330px";
    }
}

//Функція для паузи лінії
function pauseLinesButton() {
    const pause = `<img src="./images/pause-svgrepo-com.svg" alt="pause_icon" height="30px" width="30px">`;
    const play = `<img src="./images/play-svgrepo-com.svg" alt="play_icon" height="30px" width="30px">`;
    if (document.querySelector(".lines_pause_button").querySelector("img").alt == "play_icon") {
        document.querySelector(".lines_pause_button").querySelector("img").insertAdjacentHTML("afterend", pause);
        document.querySelector(".lines_pause_button").querySelector("img").remove();
    } else {
        document.querySelector(".lines_pause_button").querySelector("img").insertAdjacentHTML("afterend", play);
        document.querySelector(".lines_pause_button").querySelector("img").remove();
    }
}

//Вихід з усіх ліній
function exitLinesButton() {
    const offline = `<img src="./images/red-circle-svgrepo-com.svg" alt="lines_off" height="30px" width="30px">`;
    const online = `<img src="./images/green-circle-svgrepo-com.svg" alt="lines_on" height="30px" width="30px">`;
    if (document.querySelector(".lines_close_button").querySelector("img").alt == "lines_on") {
        document.querySelector(".lines_close_button").querySelector("img").insertAdjacentHTML("afterend", offline);
        document.querySelector(".lines_close_button").querySelector("img").remove();
    } else {
        document.querySelector(".lines_close_button").querySelector("img").insertAdjacentHTML("afterend", online);
        document.querySelector(".lines_close_button").querySelector("img").remove();
    }
}

//Функція для відкриття меню
function menuButton() {
    const elem = document.getElementById("menu_block");
    elem.classList.toggle('is-hidden');
}

//Обробник подій на лінії
function lineHandler(id) {
    const timer = setInterval(() => {
        if (document.getElementById(`${id}_block`) == null) {
            clearInterval(timer);
        }
        else {
            const block = document.getElementById(`${id}_block`);
            const generalLineCounter = block.querySelector('.line_wait_time');
            if (block.querySelector(".call_1") == null) {
                generalLineCounter.innerHTML = `<span>00:00</span>`;
                block.classList.remove('red-line');
                block.classList.remove('green-line');
                block.classList.remove('yellow-line');
                block.classList.add('grey-line');
            }
            else {
                const callItem = block.querySelector(".call_1")
                const min_span = callItem.querySelector(".min");
                const sec_span = callItem.querySelector(".sec");
                generalLineCounter.innerHTML = `<span>${min_span.textContent}:${sec_span.textContent}</span>`;
                if (sec_span.textContent > 0 || min_span.textContent > 0 && min_span.textContent < 5) {
                    block.classList.remove('red-line');
                    block.classList.remove('grey-line');
                    block.classList.remove('yellow-line');
                    block.classList.add('green-line');
                }
                if (min_span.textContent > 4 && min_span.textContent < 15) {
                    block.classList.remove('red-line');
                    block.classList.remove('grey-line');
                    block.classList.remove('green-line');
                    block.classList.add('yellow-line');
                }
                if (min_span.textContent > 14) {
                    block.classList.remove('rgreen-line');
                    block.classList.remove('grey-line');
                    block.classList.remove('yellow-line');
                    block.classList.add('red-line');
                }
            }
        }
    }, 100);
    
}

//Додавання блоку лінії
function addLineToList(name) {
    if (document.getElementById(`${name}_block`) == null) {
        for (let i = 0; i < linesInfo.length; i++) {
        if (linesInfo[i].id == name) {
            const lineDefaultBlock = `
            <div class="line_block" id="${linesInfo[i].id}_block">
                <p class="line_number">${linesInfo[i].lineNumber}</p>
                <p class="line_name">${linesInfo[i].name}</p>
                <p class="line_counter" id="${linesInfo[i].id}_line_counter">0</p>
                <p class="line_wait_time"></p>
                <div class="button_panel">
                    <button class="info" onclick="infoClick('${linesInfo[i].id}_info')">i</button>
                    <button class="open_queue" onclick="queueClick('${linesInfo[i].id}_queue', '${linesInfo[i].id}_block')">q</button>
                    <button><img src="./images/red-circle-svgrepo-com.svg" alt="" width="10px" height="10px"></button>
                </div>
                <div class="info_tab is-hidden" id="${linesInfo[i].id}_info">
                    <p>Email: ${linesInfo[i].lineEmail}</p>
                    <p>Phone: ${linesInfo[i].linePhone}</p>
                    <p>Prefix: ${linesInfo[i].linePrefix}</p>
                    <p>Sales: ${linesInfo[i].lineSales}</p>
                </div>
                <div class="line_queue is-hidden" id="${linesInfo[i].id}_queue">
                    <ol class="queue_list" id="${linesInfo[i].id}_call_list">
                    </ol>
                </div>
            </div>`;
            linesBlock.insertAdjacentHTML("beforeend", lineDefaultBlock);
            lineHandler(linesInfo[i].id);
            break;
        }
        
    }
    } else {
        document.getElementById(`${name}_block`).remove();
    }
    
}



function addCallToLine() {
    const newCall = {
        lang: "UA",
        phone_num: "9166409832",
    };
    const callList = document.getElementById("alfa_call_list");
    const lineCounter = document.getElementById("alfa_line_counter");
    let lineCounterInt = Number(lineCounter.textContent);
    lineCounterInt += 1;
    let callItem = `<li class="queue_item call_${lineCounterInt}">
                        <p class="call_num">${lineCounterInt}</p>
                        <p id="lang">${newCall.lang}</p>
                        <p id="phone_num">${newCall.phone_num}</p>
                        <p class="timer"><span class = "min">00</span>:<span class="sec">00</span></p>
                    </li>`;
    lineCounter.textContent = lineCounterInt;
    callList.insertAdjacentHTML("beforeend", callItem);
    callTimeCounter(lineCounterInt);
}

function callTimeCounter(i) {
    let seconds = 0;
    const callList = document.getElementById("alfa_call_list");
    const callItem = callList.querySelector(`.call_${i}`);
    const callTimer = callItem.querySelector(".timer");
    const min_span = callTimer.querySelector(".min");
    const sec_span = callTimer.querySelector(".sec");
    const timer = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes<10) {
        min_span.textContent = '0' + minutes;
    } else {
        min_span.textContent = minutes;
    }
    if (remainingSeconds<10) {
        sec_span.textContent = '0' + remainingSeconds;
    } else {
        sec_span.textContent = remainingSeconds;
    }   
}, 1000);
}

function deleteCallFromLine() {
    const callList = document.getElementById("alfa_call_list");
    const lineCounter = document.getElementById("alfa_line_counter");
    let lineCounterInt = Number(lineCounter.textContent);
    for (let i = 1; i <= lineCounterInt; i++) {
        callList.querySelector(`.call_${i}`).querySelector(".call_num").textContent = i - 1;
        callList.querySelector(`.call_${i}`).classList.add(`call_${i - 1}`);
        callList.querySelector(`.call_${i}`).classList.remove(`call_${i}`);
    }
    lineCounterInt -= 1;
    lineCounter.textContent = lineCounterInt;
    callList.querySelector(".call_0").remove();
}