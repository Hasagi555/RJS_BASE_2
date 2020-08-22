import React from 'react';
class Footer extends React.Component{
    render(){
        return (
/* footer for website*/
            <footer>
              <div className="container pt-2 ">
                <div className="row">
                  <div className="col-12 col-md-10">
                    <h3>VITRANS - HỆ THỐNG VẬN CHUYỂN TẠI VIỆT NAM</h3>
                  </div>
                  <div className="col-12 col-md-2 pb-3">
                    <i className="fa fa-facebook-official fa-2x icon mr-2" aria-hidden="true" />
                    <i className="fa fa-youtube-square fa-2x icon mr-2" aria-hidden="true" />
                    <i className="fa fa-info-circle icon fa-2x" aria-hidden="true" />
                  </div>
                </div>
                <div className="row" style={{color: '#938f7c'}}>
                  <div className="col-12 col-sm-3 " >
                    <p style={{borderTop: '1px solid rgb(147, 143, 124)'}} className="pt-2">LIÊN HỆ</p>
                    <span>HOT LINE</span>
                    <p>0964 66 33 99</p>
                    <p>EMAIL<span>CSKH@vitrans.com</span></p>
                  </div>
                  <div className="col-12 col-sm-3 mt-2">
                    <p>Về Vitrans</p>
                    <p>Về chúng tôi</p>
                    <p>Quy chế hoạt động</p>
                  </div>
                  <div className="col-12 col-sm-3">
                    <p>Chính sách</p>
                    <p>Chính sách bảo hiểm cá nhân</p>
                    <p>Chính sách bảo mật</p>
                  </div>
                  <div className="col-12 col-sm-3">
                    <span>Fag</span>
                    <p>Hướng dẫn mua hàng gửi hàng</p>
                    <p>Hướng dẫn thang toán</p>
                    <p>Các câu hỏi thường gặp</p>
                  </div>
                </div>
              </div>
            </footer>
          );
    }
}
export default Footer;