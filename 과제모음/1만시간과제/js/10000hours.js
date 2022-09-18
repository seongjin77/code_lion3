// js file
const click = document.querySelector(".btn-go");
const btn_go = document.querySelector(".cont-modal");

click.addEventListener("click", function () {
    btn_go.classList.toggle("togle-btn");
});

const calCulate_btn = document.querySelector(".btn-exc");
const job = document.querySelector("#job");
const oneDaytime = document.querySelector("#oneDaytime");

calCulate_btn.addEventListener("click", function (e) {
    e.preventDefault();
    let job_txt = job.value;
    let oneDaytime_txt = oneDaytime.value;

    let jobName = document.querySelector(".txt-wannabe strong");
    let oneDaytimetxt = document.querySelector(".txt-time strong");

    setTimeout(() => {
        jobName.innerHTML = job_txt;

        let calCulate_hour = function () {
            let result = Math.round(10000 / oneDaytime_txt);
            return result;
        };
        oneDaytimetxt.innerHTML = calCulate_hour();
    }, 3000);
});

// 스피너 구현만 하면 됨