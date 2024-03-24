import Navbar from '@/component/navbar';

export default function Stack() {
  return (
    <main>
      <div className="rootDiv">
        <div>
          <h1>Stack</h1>
          <Navbar activeMenu="Skill" />
          <div className="aboutWidgets"></div>
        </div>
      </div>
    </main>
  );
}
