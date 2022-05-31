import React from "react";
import ReactDOM from "react-dom";

{/* <div>
    <h1>My Contacts</h1>

    <h2>Beyonce</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
    />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>

    <h2>Jack Bauer</h2>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Jack_Bauer.jpg/220px-Jack_Bauer.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div> */}

function Card(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
  <h1>My Contacts</h1>
  <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com" />
  <Card name="Jack Bauer" img="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Jack_Bauer.jpg/220px-Jack_Bauer.jpg" tel="+987 654 321" email="jack@nowhere.com" />
  <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" tel="+918 372 574" email="gmail@chucknorris.com" />
  </div>,
  document.getElementById("root")
);
