import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="flex flex-col justify-between">
      <div className='flex flex-row'>
        <div className='flex basis-1/5 mr-16 flex-col'>
          <h2 className='font-medium mb-5'>Hỗ trợ khách hàng</h2>
          <ul>
            <li>Hotline: 1900-6035 <div>
              (1000 đ/phút, 8-21h kể cả T7, CN)</div></li>
            <li>Các câu hỏi thường gặp</li>
            <li>Gửi yêu cầu hỗ trợ</li>
            <li>Hướng dẫn đặt hàng</li>
            <li>Phương thức vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li>Hướng dẫn trả góp</li>
            <li>Chính sách hàng nhập khẩu</li>
            <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
            <li>Báo lỗi bảo mật: security@tiki.vn</li>
          </ul>
        </div>
        <div className='flex basis-1/5 mr-16 flex-col'>
        <h2 className='font-medium mb-5'>Về Tiki</h2>
          <ul>
            <li>Giới thiệu Tiki</li>
            <li>Tiki Blog</li>
            <li>Tuyển dụng</li>
            <li>Chính sách bảo mật thanh toán</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách giải quyết khiếu nại</li>
            <li>Điều khoản sử dụng</li>
            <li>Giới thiệu Tiki Xu</li>
            <li>Gói hội viên VIP</li>
            <li>Tiếp thị liên kết cùng Tiki</li>
            <li>Bán hàng doanh nghiệp</li>
            <li>Điều kiện vận chuyển</li>
          </ul>
        </div>
        <div className='flex basis-1/5 mr-16 flex-col'>
          <h2 className='font-medium mb-5'>Hợp tác và liên kết</h2>
          <ul>
            <li>Quy chế hoạt động Sàn GDTMĐT</li>
            <li>Bán hàng cùng Tiki</li>
          </ul>
          <h2 className='font-medium my-5'>Chứng nhận bởi</h2>
          <img src="../../icon/shape.svg" alt="Logo" className="bct ml-8" />
        </div>
        <div className='flex basis-1/5 mr-16 flex-col'>
          <h2 className='font-medium mb-5'>Phương thức thanh toán</h2>
          <h2 className='font-medium mb-5'>Dịch vụ giao hàng</h2>
        </div>
        <div className='flex basis-1/5 mr-16 flex-col'>
          <h2 className='font-medium mb-5'>Kết nối với chúng tôi</h2>
          <div className='flex '>
            <img src="../../icon/facebook.svg" alt="Logo" className="header-logo" />
            <img src="../../icon/youtube.svg" alt="Logo" className="header-logo" />
            <img src="../../icon/zalo.svg" alt="Logo" className="header-logo" />
          </div>
          <h2 className='font-medium my-5'>Tải ứng dụng trên điện thoại</h2>
        </div>
      </div>
      <div className='border-y-2 border-slate-200 my-10'>
        <h2 className='font-medium mb-5'>Công ty TNHH TIKI</h2>
        <ul>
          <li>Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh</li>
          <li>Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.</li>
          <li className='flex flex-row'>Hotline: <p className='text-sky-600'>1900 6035</p></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
