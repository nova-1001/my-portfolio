const aboutMeQuestions = document.querySelectorAll(".趣味");

const drawAnswer = function (order) {
  aboutMeQuestions[order].onmouseover = function () {
    const aboutMeAnswer = aboutMeQuestions[order].nextElementSibling; // HTMLで見て次の要素を取ってくる
    aboutMeAnswer.classList.add("box10,box11"); // 見えるようにする
  };
};

for (let i = 0; i < aboutMeQuestions.length; i++) {
  drawAnswer(i);
}
