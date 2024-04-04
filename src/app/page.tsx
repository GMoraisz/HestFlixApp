import Image from "next/image";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import MSlides from "./components/mSlides";



export default function Home() {
  return (

    <div>
      <nav>
        <NavBar />

      </nav>
      <main>
          <MSlides/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>

  );
}
