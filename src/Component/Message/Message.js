import React from 'react';

const Message = () => {
    return (
        <div style={{backgroundColor:'pink'}} class="mb-3 p-5 mt-5 container">
            <div class="mb-3 ">
               <h2 class="text-center mb-3">Let Us Handle Your Project</h2>
                <input type="text" class="form-control" placeholder="Your Name"/><br/>
                <input type="email" class="form-control"  placeholder="Your Email"/>
              </div>
                <div>
                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
    );
};

export default Message;