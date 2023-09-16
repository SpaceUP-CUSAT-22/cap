import Timeline from "@components/Timeline";
import Footer from "@components/Footer";
import Eligibility from "@components/Eligibility";
import Card from "@components/Card";
import Nav from "@components/Nav";
import Provider from "@components/Provider";


const Home = () => (
  <Provider>
      <Nav />
      <Timeline />
      <Card />
      <Eligibility />
      <Footer />
  </Provider>
);

export default Home;
