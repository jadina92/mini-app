import { Jumbotron, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

toast.configure();

const Profile = (props) => {
  const { id } = useParams();

  const handleOnClick = (event) => {
    event.preventDefault();
    toast.success("Notification déclenchée");
  };

  return (
    <Jumbotron>
      <h1>Mon profile</h1>
      <p>{id ? `Bienvenu utilisateur ${id}` : "Connectez vous"}</p>
      <p>
        <Button variant="success" onClick={handleOnClick}>
          Declencher une notif
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Profile;

/*AN EXO POUR EXPLIQUER LE USE PARAMS LIBRAIRIE
import { useParams, Redirect, withRouter } from "react-router-dom";
const ProfileComponent = (props) => {
  const { username } = useParams();
  const handleClick = (event) => {
    event.preventDefault();
    props.history.push("/nimportequoi");
  };
  return username ? (
    <div>
      Bonjour {username}
      <button onClick={handleClick}> Go home</button>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
const Profile = withRouter(ProfileComponent);
export default Profile;
*/
