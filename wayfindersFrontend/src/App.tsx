import React, { useState } from "react";
import LanguagePage from "./Components/LanguagePage";
import LanguageSelector from "./Components/LanguageSelector";
import MainPage from "./Components/MainPage";
import StartLanguagePage from "./Components/StartLanguagePage";
import StartSelector from "./Components/StartSelector";

function App() {
  const [startingPoint, setStartingPoint] = useState<string>();
  const [language, setLanguage] = useState<string>('');

  return (
    <div>
      {!startingPoint && (
        <StartLanguagePage>
          <LanguageSelector language={language} setLanguage={setLanguage} />
          {language ? (
            <StartSelector
              startingPoint={startingPoint}
              setStartingPoint={setStartingPoint}
            />
          ) : (
            <></>
          )}
        </StartLanguagePage>
      )}
      {startingPoint && language && <MainPage location={startingPoint} setLanguage={setLanguage}/>}
      {startingPoint && !language && (
        <LanguagePage>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </LanguagePage>
      )}
    </div>
  );
}

export default App;
