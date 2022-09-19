import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { routes = [] } = props;

  return (
    <ul>
      {Array.from(routes)?.map((route) => (
        <li>
          <Link to={route.link}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};
