import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">

            <a className="text-dark fs-4" href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4 ml-3" href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="text-dark fs-4 ml-3" href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a className="text-dark fs-4 ml-3" href="https://google.com" target="_blank" rel="noreferrer">
              <i className="fa fa-google"></i>
            </a>
            <a className="text-dark fs-4 ml-3" href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
