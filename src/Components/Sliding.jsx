import { useEffect, useState } from "react";
import "./Sliding.css";
import { ImGift } from "react-icons/im";
function Sliding() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJSeAk_ddhvXzO9GEkCP1C-usX8bdZ0OCKQ&s",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-x7GurJUeMCVtofb9ff6sDYewh-5V1IaR3iZ1Cli3zNrRH0yPWRXvsTJN1UARVJ4EULx4FoArcELHO4XVDMilKqum6R0QU5F3FmlM3TQ6PjgIDeiJeoehRyJnD4N0qVs7RNCCW43cKn8/s1600/student-backside.jpg",
    "https://www.shutterstock.com/image-vector/vector-illustration-education-elements-260nw-1242560170.jpg",
    "https://www.shutterstock.com/image-vector/vector-illustration-school-building-260nw-553127521.jpg",
    "https://www.shutterstock.com/image-vector/illustration-modern-school-260nw-102916910.jpg",
    "https://3.imimg.com/data3/AJ/LV/MY-8045672/school-college-events-photography.jpg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="container-sonu">
      <div className="image">
        {/* {images.map((image, index) => (
          <img
            key={index}
            src={images[index]}
            alt=""
            style={{
              // width: "100%",
              // height: "100%",
              objectFit: "cover",
              position: "absolute",
              // top: 0,
              // left: 0,
            }}
          />
        ))} */}
        <img
          src={images[index]}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="content"></div>
    </div>
  );
}
export default Sliding;
