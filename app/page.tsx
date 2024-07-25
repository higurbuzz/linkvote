import LinkList from "./components/LinkList";
import LinkSubmit from "./components/LinkSubmit";
import OrderBySelector from "./components/OrderBySelector";

export default function Home() {
  return (
    <main>
      <LinkSubmit />
      <hr className="h-1 my-4 bg-gray-100 border-0" />
      <OrderBySelector />
      <LinkList />
    </main>
  );
}
