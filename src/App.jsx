import Question from "./components/organisms/Question";
import { SettingProvider } from "./context/SettingContext";
import GithubIcon from "./assets/images/github-icon-filled-256.webp";
function App() {
  return (
    <SettingProvider>
      <header>
        <h1 className="title">PUB-QUIZ</h1>
      </header>
      <Question />
      <footer className="footer">
        <a
          className="icon github"
          href="https://github.com/mk92-sy/pub-quiz"
          target="_blank"
          rel="noopener noreferrer"
          title="프로젝트 바로가기"
        >
          <img src={GithubIcon} alt="" />
        </a>
        <p className="copy">© mk92-sy All rights reserved.</p>
      </footer>
    </SettingProvider>
  );
}

export default App;
