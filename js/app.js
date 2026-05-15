localStorage.setItem("minNyckel", "mittVärde");
let data = localStorage.getItem("minNyckel");

/*

dsadsadsa

*/
//alert("Vad fanns i min låda? " + data);

// Get current theme from localStorage
const localStorageTheme = localStorage.getItem("theme");

const button = document.querySelector("#theme-toggle");
button.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("isDarkTheme");

  if (currentTheme === "yes") {
    localStorage.setItem("isDarkTheme", "no");
    //button.textContent = "Dark theme";
  } else {
    localStorage.setItem("isDarkTheme", "yes");
    //button.textContent = "Light theme";
    mainCss.href = "css/style.css";
  }
  location.reload();
  //localStorage.setItem("isDarkTheme", "yes");
  //button.textContent = "Light theme";
});

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme != null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

const LocalStorageTheme = localStorage.getItem("theme");
