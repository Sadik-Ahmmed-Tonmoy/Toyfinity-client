import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
      <div className='w-48 text-center'>
        <img src="https://i.ibb.co/jH2zFgr/Toyfinity-logo-fotor-bg-remover-20230517211635-fotor-bg-remover-20230517212153.png" alt="" />
        <p className='font-bold text-2xl ms-10'>Toyfinity</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    <p className='text-center bg-[#F2F2F2]'>"© 2023 - Toyfinity. All rights reserved."</p>
    </div>
  );
};

export default Footer;