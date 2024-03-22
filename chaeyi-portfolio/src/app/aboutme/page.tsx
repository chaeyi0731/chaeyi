export default function AboutMe() {
  return (
    <main>
      <div className="rootDiv">
        <div>
          <h1>About Me</h1>
          <div className="aboutWidgets">
            <div className="infowidgets">
              <div className="profileImg"></div>
              <div className="info">
                <h1>👨‍💻 Web Developer</h1>
                <ul>
                  <li>
                    안녕하세요! <span>꾸준히 성장하는 개발자</span> 이채이 입니다.
                  </li>
                  <li>소통과 배려를 좋아하기에 언제나 편안한 팀 분위기를 만들어 갈 수 있습니다</li>
                  <li>항상 생글생글 웃으며 힘든 작업, 과정이어도 웃으며 작업 할 수 있습니다.</li>
                  <li>무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.</li>
                  <li>단 한 줄의 코드라도 서비스의 가치를 담으려고 노력합니다.</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="career">
              <ul>
                <h2>학력</h2>
                <li>2019.08 ~ ing 건양 사이버 대학교 아동학과 휴학 [4학년 1학기]</li>
                <li>2015.03 ~ 2018.02 대전생활과학고등학교 바이오케미컬과 졸업 </li>
              </ul>
              <ul>
                <h2>교육이수사항</h2>
                <li>2023.08~2024.03 IaaS기반 웹 서비스 개발자 과정 수료</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
