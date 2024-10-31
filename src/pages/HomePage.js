// HomePage.js
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';



function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default HomePage;
