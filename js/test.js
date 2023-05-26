const quizData = [
	{
		question: "1950年6月朝鲜战争爆发，抗美援朝战争共历时多长时间?",
		a: "一年五个月",
		b: "一年九个月",
		c: "两年五个月",
		d: "两年九个月",
		correct: "d",
	},
	{
		question: "1953年至1956年进行的“三大改造”是指对农业、手工业、( )的社会主义改造。",
		a: "官僚资本",
		b: "资本主义工商业",
		c: "制造业",
		d: "大资产阶级",
		correct: "b",
	},
	{
		question: "()年10月16日，我国第一颗原子弹爆炸成功。",
		a: "1952",
		b: "1962",
		c: "1964",
		d: "1967",
		correct: "c",
	},
	{
		question:
			"1959年9月底，中国石油勘探队在东北松辽平原的黑龙江肇州县境内打出第一口稳产油井，名为( ) ?",
		a: "华北油田",
		b: "大庆油田",
		c: "克拉玛依油田",
		d: "大港油田",
		correct: "b",
	},
	{
		question: "在()年，我国首次完成人工合成牛胰岛素蛋白结晶，此项成果世界领先。",
		a: "1964",
		b: "1965",
		c: "1966",
		d: "1967",
		correct: "b",
	},
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
                <h2>你答对了${score}/${quizData.length} 道问题</h2>

                <button onclick="location.reload()">重新测试</button>
            `;
		}
	}
});
