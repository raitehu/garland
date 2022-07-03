import React from "react";
import axios from 'axios';
import { Link as Scroll } from "react-scroll";
import { useForm } from "react-hook-form";
import './Form.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const TweetURL = data.TweetURL.split('?')[0];
    const ExpireDate = `${data.ExpireDate.split(':')[0]}:00:00+09:00`;
    axios.post(process.env.REACT_APP_API_URL, JSON.stringify({
      "function": "create",
      "data": {
        "TweetURL": TweetURL,
        "ExpireDate": ExpireDate
      }
    }));
    axios.post(process.env.REACT_APP_BACKEND_URL, JSON.stringify({
      "TweetURL": TweetURL,
      "ExpireDate": ExpireDate
    }), {
      headers: {
        "Authorization": process.env.REACT_APP_API_TOKEN,
        "Accept": "*/*",
        "Content-Type": "application/json",
      }
    });
    reset();
    flashMessage()
  }
  const flashMessage = () => toast.success("登録成功", {
    position: "top-center"
  })

  const UrlPattern = /https:\/\/twitter.com\/[0-9A-Za-z_]+\/status\/[0-9]+/i;
  const exampleTwitterURL = "https://twitter.com/Example_User/status/0000000000000000"
  return (
    <div className="advertisementFormArea" id="#advertisementFormArea">
      <ToastContainer />
      <h2 className="outline">ネップリ登録</h2>
      <Scroll to="forIllustrators" smooth={true} className="internalLink">登録前にご一読ください</Scroll>
      <form onSubmit={handleSubmit(onSubmit)} className="advertisementForm">
        <label className="outline">告知ツイートのURL</label>
        <input
          type="text"
          placeholder={exampleTwitterURL}
          {...register("TweetURL", {
            required: true,
            pattern: {
              value: UrlPattern,
              message: "ツイートのURLの形式が正しくありません"}
          })}
        />
        {errors.TweetURL && <span>This field is required</span>}
        <label className="outline">プリント期限</label>
        <input type="datetime-local" {...register("ExpireDate", { required: true})} />
        {errors.ExpireDate && <span>This field is required</span>}
        <input type="submit" className="submitButton" />
      </form>
    </div>
  )
}
