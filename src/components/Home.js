import React from 'react';

class Home extends React.Component{
    render(){
       return (
 /* this is home-page for web  */
        <main>
          <div className="container mt-5">
            <div className="row ">
              <div className="col-12 col-md-6 mx-auto">
                <h3 className="text-center">TẠI SAO NÊN LỰA CHỌN VITRANS?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-2 mx-auto line">
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img src="./images/icon1.png" alt="icon1"  />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">  VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1-3 ngày.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img src="./images/icon1.png" alt="icon1"  />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">  VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1-3 ngày.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3 ">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img src="./images/icon1.png" alt="icon1" />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">  VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1-3 ngày.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3 ">
                <div className="row d-flex justify-content-between">
                  <div className="col-4 pr-0">
                    <img src="./images/icon1.png" alt="icon1" />
                  </div>
                  <div className="col-8">
                    <span className="font-weight-bold">  VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG, AN TOÀN</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1-3 ngày.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container mt-5">
              <div className="row ">
                <div className="col-12 col-md-6 mx-auto mt-5">
                  <h3 className="text-center">DỊCH VỤ VẬN CHUYỂN</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-2 mx-auto line">
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row d-flex justify-content-between">
                <div className="col-12 col-md-3 bg-white mb-5  pt-4 pb-4 text-center " style={{borderRadius: '5px'}}>
                  <span className=" font-weight-bold ">VẬN CHUYỂN LIÊN TỈNH</span>
                  <img src="./images/image1.png" alt="" className="mt-4"  />
                  <button type="button" id="button" className="btn button mt-4">XEM THÊM</button>
                </div>
                <div className="col-12 col-md-3 bg-white mb-5  pt-4 pb-4 text-center " style={{borderRadius: '5px'}}>
                  <span className=" font-weight-bold ">VẬN CHUYỂN LIÊN TỈNH</span>
                  <img src="./images/image1.png" alt="" className="mt-4"  />
                  <button type="button" id="button" className="btn button mt-4">XEM THÊM</button>
                </div>
                <div className="col-12 col-md-3 bg-white mb-5  pt-4 pb-4 text-center " style={{borderRadius: '5px'}}>
                  <span className=" font-weight-bold ">VẬN CHUYỂN LIÊN TỈNH</span>
                  <img src="./images/image1.png" alt="" className="mt-4" />
                  <button type="button" id="button" className=" button btn mt-4" >XEM THÊM</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
}
export default Home;