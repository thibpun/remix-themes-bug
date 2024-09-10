import { Theme, useTheme } from "remix-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeChanger() {
  const [theme, setTheme] = useTheme();
  function changeTheme() {
    if (theme === Theme.LIGHT) setTheme(Theme.DARK);
    else if (theme === Theme.DARK) setTheme(Theme.LIGHT);
  }
  return (
    <div
      onClick={() => changeTheme()}
      className="m-[.3rem] p-1 w-16 cursor-pointer border-solid border-2 rounded-full  hover:opacity-70"
    >
      <div
        className={`h-6 w-6 ${
          theme === Theme.LIGHT ? "" : "ml-[50%]"
        } flex justify-center items-center bg-text rounded-full`}
      >
        {theme === Theme.LIGHT && <FaSun className="fill-background" />}
        {theme === Theme.DARK && <FaMoon className="fill-background" />}
      </div>
    </div>
  );
}
