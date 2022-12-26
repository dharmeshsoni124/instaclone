import { useEffect, useState } from "react";
import Logo from './assets/insta-logo.png';
import Camera from './assets/camera-logo.png'
import  "./post-view.css";
import { Link } from "react-router-dom";

const PostView = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:3006/PostView")
      .then((data) => {
        return data.json();

      }).then((userData) => {
      
      
        setUserData(userData.data.reverse());
      });
  }, []);
 
  return (

    <>
    
            <header>
                <div className="nav">
                <img id="logo" src={Logo} alt="insta-logo"></img>
                <Link to="/Form">
                
                    <input type="image"  id="camera"src={Camera} alt="camera"/>
                    </Link>
                    

                </div>
            </header>
    
      <div className="container">
        <div>
          {userData.map((user, i) => {
        
            return (
              <div className="post">
                <div className="user-information" key={i}>
                  <h3 className="name">
                    {user.author}
                    <img className="dots" src="dots.svg" alt="dots" />
                  </h3>
                  <div>
                  <div className="location">{user.location}</div>
                  </div>
                  <br />
                </div>
                <div className="user-image">
                  <img src={user.image} alt="user defined image" width="398px"></img>
                </div>
                <div className="date">
                  <div>
                    <img className="heart" src="heart.svg" alt="heart" />
                  </div>
                  <span>
                    <img className="rocket" src="rocket.svg" alt="rocket" />
                  </span>
                  <span>{user.date}</span>
                </div>
                <br />
                <div className="user-likes">{user.likes} likes</div>
                <div className="user-description">
                  <strong>{user.description}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PostView;
