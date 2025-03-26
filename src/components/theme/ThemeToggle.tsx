
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full w-9 h-9 bg-secondary/20 border-secondary hover:bg-secondary/40 transition-all duration-300">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-500" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-primary-foreground dark:border-gray-700 transition-all duration-300">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2 cursor-pointer dark:hover:bg-gray-800 transition-all duration-300">
          <Sun className="h-4 w-4 text-yellow-500" />
          <span>Light</span>
          {theme === 'light' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2 cursor-pointer dark:hover:bg-gray-800 transition-all duration-300">
          <Moon className="h-4 w-4 text-blue-400" />
          <span>Dark</span>
          {theme === 'dark' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center gap-2 cursor-pointer dark:hover:bg-gray-800 transition-all duration-300">
          <Laptop className="h-4 w-4 text-gray-500" />
          <span>System</span>
          {theme === 'system' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
