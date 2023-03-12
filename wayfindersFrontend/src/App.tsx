import React, { useState } from "react";
import LanguageSelector from "./Components/LanguageSelector";
import MainPage from "./Components/MainPage";
import StartLanguagePage from "./Components/StartLanguagePage";
import StartSelector from "./Components/StartSelector";

function App() {
  const [startingPoint, setStartingPoint] = useState<string>();
  const [language, setLanguage] = useState<string>();

  return (
    <div>
      {(!language || !startingPoint) && (
        <StartLanguagePage>
          <LanguageSelector language={language} setLanguage={setLanguage} />
          {language && !startingPoint ? (
            <StartSelector
              startingPoint={startingPoint}
              setStartingPoint={setStartingPoint}
            />
          ) : (
            <></>
          )}
        </StartLanguagePage>
      )}
      {startingPoint && language && <MainPage language={language} location={startingPoint} setLanguage={setLanguage}/>}
    </div>
  );
}

export default App;
