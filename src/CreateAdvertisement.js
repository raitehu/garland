import React from "react";
import { Link as Scroll } from "react-scroll";
import { useForm } from "react-hook-form";
import './Form.css';

export default function CreateAdvertisement() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("TweetURL");
    console.log(data.TweetURL);
    console.log("ExpireDate");
    console.log(data.ExpireDate);
  }
  const UrlPattern = /https:\/\/twitter.com\/[0-9A-Za-z_]+\/status\/[0-9]+/i;
  const exampleTwitterURL = "https://twitter.com/Example_User/status/0000000000000000"

  console.log(watch("TweetURL"));
  console.log(watch("ExpireDate"));

  return (
    <div className="advertisementFormArea" id="#advertisementFormArea">
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
