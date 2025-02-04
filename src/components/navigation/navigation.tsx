import NavigationOne from "@/components/navigation/navigation-one";
import NavigationTwo from "@/components/navigation/navigation-two";
import NavigationThree from "@/components/navigation/navigation-three";
import NavigationFour from "@/components/navigation/navigation-four";
import NavigationFive from "./navigation-five";

export default function Navigation() {
  return (
    <nav className="space-y-1">
      <NavigationOne />
      <NavigationTwo />
      <NavigationThree />
      <NavigationFour />
      <NavigationFive />
    </nav>
  );
} 