import Image from "next/image";

const Hero = () => {
  return (
    <div className="Hero">
      <div>
        <span style={{ color: "#029381", fontSize: 50 }}>&#10022;</span>
        <h4 className="title-secondary">BE ALWAYS YOUNG</h4>
        <h1 className="title-primary">Discover the gourgeous shine with us</h1>
        <p className="hero-paragraph">
          Each and every formula contains ingredients in the dosage that will do
          the most for your skin right now.
        </p>
        <button className="hero-btn">View Products</button>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ color: "#F0C396", fontSize: 120 }}>&#10022;</span>
        </div>
      </div>
      <div className="hero-right">
        <Image
          src="/img/Hero/img1.JPG"
          width={400}
          height={550}
          alt="eye behinf a big leaf"
        />
        <span style={{ color: "#C65656", fontSize: 50 }}>&#10022;</span>
      </div>
    </div>
  );
};

export default Hero;
