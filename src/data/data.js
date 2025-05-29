const questions = [
  // HTML 질문
  { question: "문서의 제목을 정의하는 태그는?", answer: ["title"], tag: "html", difficulty: 1, explanation: "title 태그는 브라우저의 제목 표시줄에 표시됩니다." },
  { question: "가장 큰 제목을 지정하는 태그는?", answer: ["h1"], tag: "html", difficulty: 1, explanation: "h1 태그는 가장 큰 제목을 나타냅니다." },
  { question: "입력을 받을 때 사용하는 태그는?", answer: ["input"], tag: "html", difficulty: 2, explanation: "input 태그를 사용하여 사용자 입력을 받을 수 있습니다." },
  { question: "웹 문서의 본문을 정의하는 태그는?", answer: ["body"], tag: "html", difficulty: 1, explanation: "body 태그는 웹 페이지의 본문을 정의합니다." },
  { question: "링크를 생성하는 HTML 태그는?", answer: ["a"], tag: "html", difficulty: 2, explanation: "a 태그는 href 속성을 사용하여 링크를 생성합니다." },
  { question: "테이블을 만들 때 사용하는 태그는?", answer: ["table"], tag: "html", difficulty: 2, explanation: "table 태그를 사용하면 표를 만들 수 있습니다." },
  { question: "목록을 만들 때 사용하는 태그는?", answer: ["ul", "ol"], tag: "html", difficulty: 2, explanation: "ul(순서 없는 목록), ol(순서 있는 목록) 태그가 있습니다." },
  { question: "라디오 버튼을 생성하는 태그는?", answer: ["input"], tag: "html", difficulty: 3, explanation: "input 태그의 type 속성을 'radio'로 설정하면 라디오 버튼을 만들 수 있습니다." },
  { question: "이미지를 삽입하는 태그는?", answer: ["img"], tag: "html", difficulty: 2, explanation: "img 태그의 src 속성을 이용해 이미지를 삽입할 수 있습니다." },
  { question: "폼을 정의하는 태그는?", answer: ["form"], tag: "html", difficulty: 3, explanation: "form 태그는 사용자 입력을 받을 수 있는 영역을 정의합니다." },

  // CSS 질문
  { question: "요소의 배경색을 변경하는 속성은?", answer: ["background-color", "bg-color"], tag: "css", difficulty: 1, explanation: "background-color 속성을 사용하여 배경색을 지정할 수 있습니다." },
  { question: "글자의 크기를 변경하는 속성은?", answer: ["font-size"], tag: "css", difficulty: 1, explanation: "font-size 속성을 사용하여 텍스트 크기를 변경할 수 있습니다." },
  { question: "테두리를 설정하는 속성은?", answer: ["border"], tag: "css", difficulty: 2, explanation: "border 속성을 사용하면 요소의 테두리를 설정할 수 있습니다." },
  { question: "글자의 색상을 변경하는 속성은?", answer: ["color"], tag: "css", difficulty: 1, explanation: "color 속성은 글자의 색상을 변경합니다." },
  { question: "요소를 중앙 정렬하는 속성은?", answer: ["text-align"], tag: "css", difficulty: 2, explanation: "text-align 속성을 사용하여 텍스트를 정렬할 수 있습니다." },
  { question: "요소의 마진을 설정하는 속성은?", answer: ["margin"], tag: "css", difficulty: 2, explanation: "margin 속성을 사용하면 바깥쪽 여백을 설정할 수 있습니다." },
  { question: "요소의 크기를 자동으로 조정하는 속성은?", answer: ["width", "height"], tag: "css", difficulty: 3, explanation: "width 및 height 속성을 사용하여 크기를 조정할 수 있습니다." },
  { question: "요소를 투명하게 만드는 속성은?", answer: ["opacity"], tag: "css", difficulty: 3, explanation: "opacity 속성을 사용하면 요소의 투명도를 조정할 수 있습니다." },
  { question: "요소를 숨기는 방법은?", answer: ["display", "visibility"], tag: "css", difficulty: 3, explanation: "display 속성을 'none'으로 설정하거나 visibility 속성을 'hidden'으로 설정하여 숨길 수 있습니다." },
  { question: "고정된 배경 이미지를 설정하는 속성은?", answer: ["background-attachment"], tag: "css", difficulty: 3, explanation: "background-attachment 속성을 사용하여 배경을 고정할 수 있습니다." },

  // JavaScript
  { question: "변수를 선언하는 키워드는?", answer: ["var", "let", "const"], tag: "javascript", difficulty: 1, explanation: "var, let, const 키워드를 사용하여 변수를 선언할 수 있습니다." },
  { question: "함수는 어떻게 선언하나요?", answer: ["function"], tag: "javascript", difficulty: 1, explanation: "function 키워드를 사용하여 함수를 선언할 수 있습니다." },
  { question: "배열을 선언하는 방법은?", answer: ["array"], tag: "javascript", difficulty: 2, explanation: "배열은 [] 대괄호를 사용하여 선언할 수 있습니다." },
  { question: "조건문을 작성하는 키워드는?", answer: ["if", "else"], tag: "javascript", difficulty: 2, explanation: "if 및 else 키워드를 사용하여 조건문을 작성할 수 있습니다." },
  { question: "반복문을 실행하는 키워드는?", answer: ["for", "while"], tag: "javascript", difficulty: 2, explanation: "for 및 while 키워드를 사용하여 반복문을 작성할 수 있습니다." },
  { question: "객체를 선언하는 방법은?", answer: ["object"], tag: "javascript", difficulty: 3, explanation: "객체는 {} 중괄호를 사용하여 선언할 수 있습니다." },
  { question: "이벤트를 추가하는 메서드는?", answer: ["addEventListener"], tag: "javascript", difficulty: 3, explanation: "addEventListener 메서드를 사용하여 이벤트를 추가할 수 있습니다." },
  { question: "배열 요소를 추가하는 메서드는?", answer: ["push"], tag: "javascript", difficulty: 3, explanation: "push 메서드를 사용하여 배열 요소를 추가할 수 있습니다." },
  { question: "타이머를 설정하는 함수는?", answer: ["setTimeout", "setInterval"], tag: "javascript", difficulty: 3, explanation: "setTimeout 및 setInterval 함수를 사용하여 타이머를 설정할 수 있습니다." }
];

export default questions;
