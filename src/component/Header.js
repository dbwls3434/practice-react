import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propType = {
  title: PropTypes.string.isRequired,
};

export default Header;
