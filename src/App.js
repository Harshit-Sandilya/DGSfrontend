import "./App.css";
import Teacher from "./pages/teachers";
import Navbar from "./pages/assets/navbar";
import Job from "./pages/job";
import Gallery from "./pages/gallery";
import Cal from "./pages/calendar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Teacher /> */}
      {/* <Job /> */}
      <Gallery />
      {/* <Cal /> */}
    </div>
  );
}

export default App;
