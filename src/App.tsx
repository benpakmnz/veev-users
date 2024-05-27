import StoreContextProvider from "./shared/store";
import AppHeader from "./components/AppHeader/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter/AppFooter";
import "./theme/index.scss";

const App: React.FC = () => {
  return (
    <StoreContextProvider>
      <div className="app-container">
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    </StoreContextProvider>
  );
};

export default App;
