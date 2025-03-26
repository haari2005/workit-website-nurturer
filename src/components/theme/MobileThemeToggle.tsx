
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function MobileThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 relative overflow-hidden bg-secondary/20 hover:bg-secondary/40 transition-all duration-300"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-500 hover:text-yellow-600" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400 hover:text-blue-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
