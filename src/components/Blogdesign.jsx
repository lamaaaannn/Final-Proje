import { useParams } from "react-router-dom";
import "../styles/Blogdesign.css";
import Blogcards from "../blogcards.json";
import { Link } from "react-router-dom";
function Blogdesign() {
  const { id } = useParams();
  const data = [
    {
      title: "Best Design Tips You Will Read This Year",
      color: "#FFF3E0",
      date: "21 August 2022",
      image: "./images/blog1.png",
      path: "./blogdesign",
    },
    {
      button: "TRAVEL",
      title: "The loss is not all that of surprising things",
      color: "#FFF3E0",
      date: "22 August 2022",
      image: "./images/blog2.png",
      path: "./blogdesign",
    },
  ];

//   const blog = data.find((a) => a.id == id);

  return (
    <div className="contain1">
  <img  src="../images/blog1.png" alt="" />

  <div className="text1">
    <span>By Dev -- 24 August 2022 -- 4 COMMENTS</span>
    <p>Proin gravida ex eget augue eleifend eleifend. Integer dui auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat </p>
  </div>
  
  <h1>User Interview</h1>

  <div className="text2">
<span>Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.
</span>
  </div>
  <div className="title">
<img src="../images/logo.png" alt="" />
<div>
  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</div>
  </div>
  <div className="solving">
    <div className="details"></div>
    <div className="text3">
      <h1>Problem Solving</h1>
      <span>Proin eu bibendum dui, nec volutpat torto velit. Quisque ligula velit faucibus eu posuere in, tincidunt at urna. Aenean tincidunt dictum sem id pharetra curabitur tortor lacinia.</span>
    <span>* Aenean auctor massa id malesuada tincidunt</span>
    <span>* Aenean auctor massa id malesuada tincidunt</span>
    <span>* Aenean auctor massa id malesuada tincidunt</span>
    <span>* Aenean auctor massa id malesuada tincidunt</span>
    <span>Curabitur blandit purus amet enim condimentum Aenean auctor massa id malesuada tincidunt. Nullam elementum posuere erat at accumsan ante sagittis fames ac ante ipsum.</span>
   
    </div>
  </div>
  <div className="text4">
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. </span>
  </div>
  <div className="text5">
<h1>Interface Design</h1>
<span>Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a
finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc
</span>
</div>
<div className="social">
  <div className="left">
<span>SOCIAL :</span>
<img src="../images/face.png" alt="" />
<img src="../images/insta.png" alt="" />
<img src="../images/tvit.png" alt="" />
</div>
<div className="right">
  <p>TAGS : </p>
  <button >Design</button>
  <button>Food</button>
  <button>Travel</button>
</div>
</div>
    </div>
  );
}
export default Blogdesign;
