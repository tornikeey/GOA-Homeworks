import { useState, useEffect } from "react";

const images = [
  "https://media.wired.com/photos/592675f6cefba457b079a0cd/3:2/w_2560%2Cc_limit/SCG003S-FRONTTA.jpg",
  "https://media.architecturaldigest.com/photos/66758a12539a07cf706eefaa/16:9/w_2560%2Cc_limit/EMBARGO-BUGATTI-World-Premiere-Presskit-Images-26.jpg",
  "https://www.motorbiscuit.com/wp-content/uploads/2022/10/2018-Chevrolet-Camaro-ZL1-034.jpg?w=925&strip=all&quality=89",
  "https://static.independent.co.uk/2025/06/19/15/14/Polestar-3.png",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.wrapper}>
      {images.map((img, i) => (
        <img className="w-[240px]"
          key={i}
          src={img}
          alt=""
          style={{
            ...styles.image,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      <div style={styles.overlay}></div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    transition: "opacity 1.5s ease-in-out",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default ImageSlider;