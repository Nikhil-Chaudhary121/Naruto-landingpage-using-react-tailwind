import { Hero, MiddlePage, LastPage } from "./sections";
import Nav from "./components/Nav";
export default function App() {
  return (
    <main className=" relative">
      <Nav />
      <section className="  xl:padding-l wide:padding-r ">
        <Hero />
      </section>
      <section className=" pt-16">
        <MiddlePage />
      </section>
      <section className=" py-1">
        <LastPage />
      </section>
    </main>
  );
}
