import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://res.cloudinary.com/dzridmuce/image/upload/v1734611725/1709125720680_luvhqo.jpg"
      alt="Fejiro Ajax"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Fejiro Ajax</h1>
      <p>
        I'm a software developer with a passion for transforming concepts into
        reality through coding and design. I specialize in enhancing digital
        platforms and improving performance metrics, utilizing tools like Figma
        mindset and dedication to refining my techniques. I thrive on projects
        within the tech space, constantly seeking new challenges and
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💥" color="#ffbe0b" />
      <Skill skill="HTML + CSS" emoji="😎" color="#fb5607" />
      <Skill skill="Svelte" emoji="👶" color="#ff006e" />
      <Skill skill="JavaScript" emoji="💪" color="#8338ec" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
