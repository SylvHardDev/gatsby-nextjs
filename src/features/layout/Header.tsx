import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        <Button>Demo</Button>
      </div>
    </header>
  );
};
