import { Link } from "react-router-dom";

type linkProps = {
  title: string;
  styles: {};
};

const makeUrl = (s: string) => {
  return `/${s.toString().toLowerCase().replace(/ /g, "")}`;
};

const MyLink = ({ title, styles }: linkProps) => {
  return (
    <Link to={makeUrl(title)} key={title} style={styles}>
      {title}
    </Link>
  );
};

export default MyLink;
