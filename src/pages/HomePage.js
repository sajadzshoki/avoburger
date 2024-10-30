// HomePage.js
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';



function HomePage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <MainContent />
    </div>
  );
}

export default HomePage;
