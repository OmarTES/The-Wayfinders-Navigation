import { Button } from "antd";
import React from "react";
import SearchBar from "./SearchBar";

type MainPageProps = {
  setLanguage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const MainPage = (props: MainPageProps) => {
	const resetApp = () => {
		props.setLanguage('');
	}
  return (
    <div>
      <SearchBar />
      <Button onClick={resetApp}>Reset App to Language selection</Button>
    </div>
  );
};

export default MainPage;
