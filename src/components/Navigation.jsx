import { useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const handleClick = (navigation) => {
        navigate(navigation, { replace: true });
      };
  return (
    <>
      <h1>Navigation Buttons</h1>
        <button onClick={() => handleClick('./')}>Header</button>
        <button onClick={() =>  handleClick('./home')}>Home</button>
        <button onClick={() =>  handleClick('./profile')}>Form</button>
    </>
  )
}

export default Navigation;