import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    This is the 404 page. :(
    <p>
      <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default NotFoundPage;
