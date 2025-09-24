
import HeaderComponent from "./components/HeaderComponent";
import UserPage from "./pages/UserPage";


function App() {
  return (
    <div className="min-h-screen bg-background  px-10 w-full">
      {/*Creating Header component for batter UI*/}
    <HeaderComponent/>  
    <UserPage/>
    </div>
  );
}

export default App;
