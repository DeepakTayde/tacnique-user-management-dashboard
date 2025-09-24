
import HeaderComponent from "./components/HeaderComponent";
import UserPage from "./pages/UserPage";


function App() {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center p-10">
      {/*Creating Header component for batter UI*/}
    <HeaderComponent/>  
    <UserPage/>
    </div>
  );
}

export default App;
