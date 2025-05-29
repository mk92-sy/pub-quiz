const questions = [
  {
    tag: "html",
    difficulty: 1,
    question: "HTML에서 문서를 정의하는 태그는?",
    answer: ["<!DOCTYPE>"],
    explanation: "HTML 문서의 유형을 정의하는 태그입니다.",
  },
  {
    tag: "html",
    difficulty: 1,
    question: "HTML에서 줄바꿈을 위한 태그는?",
    answer: ["<br>"],
    explanation: "'<br>' 태그를 사용하면 텍스트가 줄바꿈 됩니다.",
  },
  {
    tag: "html",
    difficulty: 1,
    question: "'<strong>'과 '<b>' 태그의 차이점은?",
    answer: ["의미론적 차이"],
    explanation:
      "'<strong>'은 중요성을 강조하고 '<b>'는 단순한 굵기 변경입니다.",
  },
  {
    tag: "html",
    difficulty: 1,
    question: "'<img>' 태그의 필수 속성은?",
    answer: ["src", "alt"],
    explanation: "'src'는 이미지 주소, 'alt'는 대체 텍스트를 지정합니다.",
  },
  {
    tag: "html",
    difficulty: 1,
    question: "HTML5에서 새롭게 추가된 의미론적 태그를 하나 말하세요.",
    answer: ["<article>", "<section>", "<nav>", "<header>", "<footer>"],
    explanation:
      "HTML5는 더 나은 구조화를 위해 여러 의미론적 태그를 추가했습니다.",
  },
  {
    tag: "html",
    difficulty: 2,
    question: "HTML에서 폼 데이터를 서버로 보내는 태그는?",
    answer: ["<form>"],
    explanation: "'<form>' 태그는 사용자 입력을 처리하기 위한 컨테이너입니다.",
  },
  {
    tag: "html",
    difficulty: 2,
    question: "'<input>' 태그에서 사용자가 비밀번호를 입력하도록 하는 속성은?",
    answer: ["type='password'"],
    explanation: "'password' 타입은 입력한 텍스트를 숨깁니다.",
  },
  {
    tag: "html",
    difficulty: 2,
    question: "HTML5에서 '<video>' 태그로 영상을 삽입할 때, 자동 재생 옵션은?",
    answer: ["autoplay"],
    explanation: "'autoplay' 속성을 사용하면 영상이 자동으로 재생됩니다.",
  },
  {
    tag: "html",
    difficulty: 2,
    question: "'<table>' 태그에서 표의 제목을 지정하는 태그는?",
    answer: ["<caption>"],
    explanation: "'<caption>' 태그를 사용하면 표의 제목을 설정할 수 있습니다.",
  },
  {
    tag: "html",
    difficulty: 2,
    question: "HTML에서 다국어 지원을 위해 사용되는 글로벌 속성은?",
    answer: ["lang"],
    explanation: "'lang' 속성을 지정하면 문서의 언어를 설정할 수 있습니다.",
  },
  {
    tag: "html",
    difficulty: 3,
    question: "'<meta>' 태그를 사용해 SEO를 개선하는 방법은?",
    answer: ["meta description", "meta keywords"],
    explanation:
      "'meta description'과 'keywords'를 설정하면 검색 엔진 최적화에 도움됩니다.",
  },
  {
    tag: "html",
    difficulty: 3,
    question: "ARIA란 무엇이며, HTML에서 어떻게 사용하나요?",
    answer: ["접근성 향상", "role 속성"],
    explanation:
      "ARIA는 웹 접근성을 향상시키기 위한 표준이며 'role' 속성을 활용할 수 있습니다.",
  },
  {
    tag: "html",
    difficulty: 3,
    question: "HTML에서 웹사이트의 아이콘을 지정하는 태그는?",
    answer: ["<link rel='icon'>"],
    explanation: "'<link>' 태그를 사용해 파비콘을 설정할 수 있습니다.",
  },
  {
    tag: "html",
    difficulty: 3,
    question: "HTML에서 '<iframe>' 태그의 주요 사용 목적은?",
    answer: ["외부 콘텐츠 삽입"],
    explanation:
      "'<iframe>'을 사용하면 외부 페이지나 콘텐츠를 포함할 수 있습니다.",
  },
  {
    tag: "html",
    difficulty: 3,
    question: "HTML에서 '<noscript>' 태그의 기능은?",
    answer: ["자바스크립트 미지원 시 대체 콘텐츠 표시"],
    explanation:
      "브라우저가 자바스크립트를 지원하지 않을 때 대체 내용을 제공합니다.",
  },
  {
    tag: "css",
    difficulty: 1,
    question: "CSS에서 폰트 크기를 조정하는 속성은?",
    answer: ["font-size"],
    explanation: "'font-size'를 사용하면 텍스트 크기를 변경할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 1,
    question: "CSS에서 외부 스타일시트를 연결하는 방법은?",
    answer: ["link 태그"],
    explanation:
      "'<link rel='stylesheet' href='style.css'>'를 사용하면 외부 스타일을 적용할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 1,
    question: "CSS에서 박스 모델의 기본 구성 요소 4가지는?",
    answer: ["content", "padding", "border", "margin"],
    explanation:
      "박스 모델은 요소의 내부 콘텐츠, 패딩, 테두리, 그리고 마진으로 구성됩니다.",
  },
  {
    tag: "css",
    difficulty: 1,
    question: "CSS에서 글씨를 굵게 만드는 속성은?",
    answer: ["font-weight"],
    explanation:
      "'font-weight: bold;'을 사용하면 텍스트를 굵게 만들 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 1,
    question: "CSS에서 요소를 중앙 정렬하는 가장 쉬운 방법은?",
    answer: ["text-align: center"],
    explanation:
      "'text-align: center;'을 사용하면 텍스트를 가운데 정렬할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 2,
    question: "CSS에서 flexbox를 사용하는 이유는?",
    answer: ["레이아웃 구성"],
    explanation:
      "Flexbox는 요소들을 유연하게 배치하는 강력한 레이아웃 시스템입니다.",
  },
  {
    tag: "css",
    difficulty: 2,
    question: "CSS에서 'position: absolute'의 기준이 되는 요소는?",
    answer: ["가장 가까운 position: relative 요소"],
    explanation:
      "'absolute'는 가장 가까운 'relative' 부모를 기준으로 위치가 지정됩니다.",
  },
  {
    tag: "css",
    difficulty: 2,
    question: "'display: grid'을 사용하면 얻을 수 있는 이점은?",
    answer: ["복잡한 레이아웃"],
    explanation:
      "Grid 시스템을 사용하면 복잡한 웹 페이지 레이아웃을 쉽게 구성할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 2,
    question: "'z-index'의 역할은?",
    answer: ["레이어 순서 결정"],
    explanation: "'z-index'를 사용하면 요소의 쌓임 순서를 지정할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 2,
    question: "CSS에서 트랜지션을 적용하는 방법은?",
    answer: ["transition 속성"],
    explanation: "'transition'을 사용하면 요소의 변화가 부드럽게 진행됩니다.",
  },

  {
    tag: "css",
    difficulty: 3,
    question: "CSS에서 keyframes을 사용해 애니메이션을 적용하는 방법은?",
    answer: ["@keyframes"],
    explanation:
      "@keyframes을 활용하여 특정 애니메이션 효과를 생성할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 3,
    question: "CSS에서 반응형 디자인을 위해 사용하는 기술은?",
    answer: ["미디어 쿼리"],
    explanation: "'@media'를 사용하면 다양한 화면 크기에 대응할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 3,
    question: "CSS에서 'clip-path'의 역할은?",
    answer: ["요소 일부를 자르기"],
    explanation:
      "'clip-path'를 활용하면 특정 모양으로 요소를 잘라낼 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 3,
    question: "CSS 변수의 정의 및 사용 방법은?",
    answer: ["--변수명, var()"],
    explanation:
      "':root { --main-color: blue; }' 선언 후 'var(--main-color)'로 사용할 수 있습니다.",
  },
  {
    tag: "css",
    difficulty: 3,
    question: "CSS에서 'backdrop-filter'를 활용하는 경우는?",
    answer: ["반투명 효과"],
    explanation:
      "'backdrop-filter: blur(5px);'을 사용하면 배경을 흐리게 처리할 수 있습니다.",
  },
  {
    tag: "javascript",
    difficulty: 1,
    question: "JavaScript에서 변수를 선언하는 3가지 키워드는?",
    answer: ["var", "let", "const"],
    explanation: "'var'는 함수 범위, 'let'과 'const'는 블록 범위입니다.",
  },
  {
    tag: "javascript",
    difficulty: 1,
    question: "'typeof' 연산자의 역할은?",
    answer: ["데이터 타입 확인"],
    explanation: "'typeof'를 사용하면 변수의 데이터 타입을 확인할 수 있습니다.",
  },
  {
    tag: "javascript",
    difficulty: 1,
    question: "'Array.push()' 메서드의 역할은?",
    answer: ["배열에 요소 추가"],
    explanation:
      "'push()'를 사용하면 배열 끝에 새로운 요소를 추가할 수 있습니다.",
  },
  {
    tag: "javascript",
    difficulty: 1,
    question: "'=='과 '==='의 차이는?",
    answer: ["타입 비교 여부"],
    explanation: "'=='는 값만 비교하고 '==='는 타입까지 비교합니다.",
  },
  {
    tag: "javascript",
    difficulty: 1,
    question: "'setTimeout()'과 'setInterval()'의 차이점은?",
    answer: ["한 번 실행 vs 반복 실행"],
    explanation:
      "'setTimeout()'은 특정 시간 후 한 번 실행, 'setInterval()'은 일정 간격으로 반복 실행합니다.",
  },

  {
    tag: "javascript",
    difficulty: 2,
    question: "JavaScript에서 클로저(Closure)의 정의는?",
    answer: ["내부 함수가 외부 변수 접근"],
    explanation:
      "클로저는 내부 함수가 외부 함수의 변수를 계속 참조할 수 있도록 하는 기능입니다.",
  },
  {
    tag: "javascript",
    difficulty: 2,
    question: "'map()'과 'forEach()'의 차이는?",
    answer: ["새 배열 생성 여부"],
    explanation:
      "'map()'은 새로운 배열을 반환하고 'forEach()'는 기존 배열을 수정하지 않습니다.",
  },
  {
    tag: "javascript",
    difficulty: 2,
    question: "JavaScript에서 객체를 얕게 복사하는 방법은?",
    answer: ["Object.assign", "스프레드 연산자"],
    explanation:
      "'Object.assign({}, obj)' 또는 '{...obj}'를 사용하면 객체를 얕게 복사할 수 있습니다.",
  },
  {
    tag: "javascript",
    difficulty: 2,
    question: "JavaScript에서 'Promise'를 사용하는 이유는?",
    answer: ["비동기 처리"],
    explanation:
      "'Promise'는 비동기 작업의 완료 여부를 추적하는 메커니즘을 제공합니다.",
  },
  {
    tag: "javascript",
    difficulty: 2,
    question: "'async/await'의 역할은?",
    answer: ["비동기 코드 간소화"],
    explanation:
      "'async/await'을 사용하면 'Promise' 기반 코드를 더 직관적으로 작성할 수 있습니다.",
  },

  {
    tag: "javascript",
    difficulty: 3,
    question: "'this' 키워드가 동적으로 변경되는 경우는?",
    answer: ["화살표 함수 사용, 메서드 호출"],
    explanation: "'this'는 호출 방식에 따라 다르게 결정됩니다.",
  },
  {
    tag: "javascript",
    difficulty: 3,
    question: "JavaScript에서 'Event Loop'란?",
    answer: ["비동기 작업 처리 방식"],
    explanation:
      "'Event Loop'는 JavaScript가 비동기 작업을 처리하는 메커니즘입니다.",
  },
  {
    tag: "javascript",
    difficulty: 3,
    question: "JS에서 'debounce'와 'throttle'의 차이점은?",
    answer: ["입력 제한 방식 차이"],
    explanation:
      "'debounce'는 특정 시간이 지나면 실행, 'throttle'은 일정 주기로 실행됩니다.",
  },
  {
    tag: "javascript",
    difficulty: 3,
    question: "JavaScript에서 'WeakMap'과 'Map'의 차이는?",
    answer: ["참조 방식 차이"],
    explanation:
      "'WeakMap'은 키에 대한 참조가 약하며 가비지 컬렉션이 자동 관리됩니다.",
  },
  {
    tag: "javascript",
    difficulty: 3,
    question: "JS에서 'Proxy' 객체의 역할은?",
    answer: ["객체 동작 감시 및 변경"],
    explanation:
      "'Proxy'를 사용하면 객체의 동작을 감시하고 제어할 수 있습니다.",
  },
];

export default questions;
