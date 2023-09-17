// import Timeline from "@components/Timeline";
import Footer from "@components/Footer";
import Eligibility from "@components/Eligibility";
import Card from "@components/Card";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
const Home = () => (
  <Provider>
        <Nav />
        {/* <Timeline /> */}
        <Card />
        <Eligibility />
        
        <Footer />
  </Provider>
);

export default Home;
