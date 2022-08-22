import Home from 'pages/Home';
import Voucher from 'pages/voucher/Voucher';
import { Routes, Route } from 'react-router-dom';

function ApplicationRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="voucher" element={<Voucher />} />
    </Routes>
  );
}

export default ApplicationRouter;
