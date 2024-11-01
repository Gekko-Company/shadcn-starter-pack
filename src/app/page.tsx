'use client'
// `app/page.tsx` is the UI for the `/` URL
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <p className="text-lg">This is the main page. Welcome...</p>
      <div>
        <ul>
          <li>Project setup: done</li>
          <li>Theme & theme toggler: done</li>
          <li>Components: done</li>
          <li>Sidebar: demo, hook up after navigation is done</li>
          <li>Navigation: todo, check out <a href="https://nextjs.org/docs/app/building-your-application/routing/pages">docs</a> </li>
        </ul>
      </div>
      <Button onClick={handleClick} aria-label="Demo button" >
        Component check: Button works!
      </Button>
    </div >
  );
}
