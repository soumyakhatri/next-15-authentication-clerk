import NavigationOne from "@/components/navigation-one";
import NavigationTwo from "@/components/navigation-two";
import NavigationThree from "@/components/navigation-three";
import NavigationFour from "@/components/navigation-four";

export default function Navigation() {
  return (
    <nav className="space-y-4">
      <NavigationOne />
      <NavigationTwo />
      <NavigationThree />
      <NavigationFour />
    </nav>
  );
} 