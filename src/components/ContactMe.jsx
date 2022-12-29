import React from 'react'
import { Slide} from 'react-awesome-reveal'

function ContactMe() {
  return (
<div className="hero min-h-screen bg-base-200">
  <Slide >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">GET IN TOUCH
</h1>
      <p className="py-6">Got a question or proposal, or just want to say hello? Go ahead.</p>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form action="https://formsubmit.co/4fb2815f56575b65370cf3b4dce29270" method="POST">

      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <textarea className="textarea input input-bordered" name="name" placeholder="write your message here"></textarea>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </div>
      </form>
    </div>

  </div>
  </Slide>
</div>  )
}

export default ContactMe