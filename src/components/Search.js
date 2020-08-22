import React from 'react';

class Search extends React.Component{
    render(){
        /* search 
        */
       return (
        <div className="container mt-4" style={{marginBottom: '150px'}}>
          <div className="row">
            <div className="col-12 mb-4">
              <h4><a href>TRA CỨU ĐƠN HÀNG</a></h4>
            </div>
            <div className="col-12 col-md-2 mt-3">
              <span className="font-weight-bold">Nhập mã đơn hàng</span>
            </div>
            <div className=" col-12 col-md-6 mt-2">
              <form action="/action_page.php">
                <div className="form-group">
                  <input type="text" className="form-control" id="usr" name="username" />
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4 mt-1 ">
              <button type="button" className="btn btn-primary text-white pl-3 ml-3 mx-auto "><i className="fa fa-search mr-1 " aria-hidden="true" style={{fontSize: '22px'}} />Tìm kiếm</button>
            </div>
          </div>
          <div className="row mt-5">
            <table className="table table-bordered mb-5">
              <thead>
                <tr>
                  <th>Stt</th>
                  <th>Mã đơn hàng</th>
                  <th>Khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Gom hàng</th>
                  <th>Phí vận chuyển</th>
                  <th>Trạng thái đơn hàng</th>
                  <th>Ngày gửi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>vpt_01_03_09_25874</td>
                  <td>Nguyễn minh anh</td>
                  <td>0375312938</td>
                  <td>Lê ngọc anh</td>
                  <td>50.000</td>
                  <td>Đang chuyển</td>
                  <td>25/12/2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
}

export default Search;
