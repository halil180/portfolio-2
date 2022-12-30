import React from 'react'
import { Slide} from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

function ContactMe() {
  const {t} = useTranslation()

  return (
<div className="hero min-h-screen bg-base-200">
  <Slide >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">{t("getInTouch")}
</h1>
      <p className="py-6">{t("gotAQuestion")}</p>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form action="https://formsubmit.co/4fb2815f56575b65370cf3b4dce29270" method="POST">

      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">{t("message")}</span>
          </label>
          <textarea className="textarea input input-bordered" name="name" placeholder={t("writeYourMessage")}></textarea>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">{t("submit")}</button>
        </div>
      </div>
      </form>
    </div>

  </div>
  </Slide>
</div>  )
}

export default ContactMe