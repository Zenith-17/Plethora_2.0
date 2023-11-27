import { useState, useEffect } from "react";

export default function useDarkSide() {
  // start interpreting from here in a sequential manner
  const [theme, setTheme] = useState(localStorage.theme); //as initially local storage has no key called theme so theme will be undefined initially VVIP
  const colorTheme = theme === "dark" ? "light" : "dark"; //initially this will evaluate to false as null is false and theme is null hence colorTheme will be set to dark initially

  //The `useEffect` hook is used to manage side effects. It runs after the initial render and whenever the `theme` or `colorTheme` state changes (due to the dependency array `[theme, colorTheme]`). 
  useEffect(() => {
    const root = window.document.documentElement; //using this we are getting the reference to the root node of the document

    root.classList.remove(colorTheme);//The purpose of this line is to remove the class specified by the colorTheme variable from the classList of the root element.

    // as we are using tailwind hence specifying light and dark will change the entire color eg className="dark" 
    root.classList.add(theme);//The purpose of this line is to add the class specified by the theme variable to the classList of the root element.
    localStorage.setItem("theme", theme); //in the first render we stored a key named theme in the localStorage having a value as theme 
  }, [theme, colorTheme]); //if theme or colorTheme is changed then this functional component ie useDarkSide will be rerendered

  return [colorTheme, setTheme];
}
