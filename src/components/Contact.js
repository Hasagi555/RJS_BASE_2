import React from 'react';
import {STRINGS} from '@constants/Strings';
class Contact extends React.Component{
    render(){
        /* this is part Contact
        */
       return (
        <div className="container mt-3">
          <div className="row ">
            <div className="col-12 mb-3">
              <h5>{STRINGS.TITLE}</h5>
            </div>
            <div className="col-12 col-md-6 p-0">
              <form action="/action_page.php">
                <div className="form-group col-12">
                  <input type="text" className="form-control" id="usr" name="username" placeholder="Họ và tên" required />
                </div>
                <div className="form-group col-12">
                  <input type="email" className="form-control" id="usr" name="username" placeholder="Email" required />
                </div>
                <div className="form-group col-12">
                  <input type="text" className="form-control" id="usr" name="username" placeholder="Số điện thoại" />
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 p-0">
              <form action="/action_page.php">
                <div className="form-group col-12">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Lời nhắn..." defaultValue={""} style={{height:'147px'}} />
                </div>
              </form>
            </div>
            <div className="col-12 text-center mt-5">
              <div className="col-4 mx-auto pb-5" style={{borderBottom: '2px solid #fbbd10'}}>
                <button type="submit" className="btn button" style={{backgroundColor: '#6fa8dc', borderRadius: '2rem', width: '150px'}}><i className="fa fa-paper-plane-o fa-1x mr-1" aria-hidden="true" />Gửi</button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 mb-3">
              <h5>Thông tin kho hàng</h5>
            </div>
            <div className="col-12">
              <ul className="ml-5">
                <li className="mb-2">Kho hà nội:số 19, ngõ 12, đường phan văn trường, cầu giấy, hà nội</li>
                <li className="mb-2">Kho đà nẵng : k42/34 nguyễn thanh hãn, hải châu đà nẵng</li>
                <li className="mb-2">Kho hồ chí minh:số 50 đường T4B, Tây thạnh, Tân Phú, Hồ chí minh</li>
                <li className="mb-5">Hotline:3103812038103131</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
}
export default Contact;
