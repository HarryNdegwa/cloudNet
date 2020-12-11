import "./style.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container"></div>
      <div className="footer-copyright">
        CloudX &copy;2019-{new Date().getFullYear()}.All Rigts Reserved.
      </div>
    </div>
  );
}

export default Footer;
