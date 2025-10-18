import LoginForm from "./components/LoginForm";
import ImageSlider from "./components/Slide";
import Section from "./components/Section";

const App = () => {
  return (
    <>
    <main style={styles.main}>
      <div style={styles.left}>
        <LoginForm />
      </div>
      <ImageSlider />
    </main>
    <Section>

    </Section>
    </>
  );
};

const styles = {
  main: {
    display: "flex",
    height: "100vh",
  },
  left: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
};

export default App;