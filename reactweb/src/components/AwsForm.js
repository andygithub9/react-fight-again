import React, { Fragment, useState } from "react";

const AwsForm = (props) => {
  const [textAccessKeyID, setAccessKeyID] = useState(
    props.AwsFormData.accessKeyID
  );
  const [textSecretAccessKey, setSecretAccessKey] = useState(
    props.AwsFormData.secretAccessKey
  );
  const [selectRegionID, setRegionID] = useState(props.AwsFormData.regionID);

  const textAccessKeyID_onchange = (e) => {
    setAccessKeyID(e.target.value);
  };

  const textSecretAccessKey_onchange = (e) => {
    setSecretAccessKey(e.target.value);
  };

  const selectRegionID_onchange = (e) => {
    setRegionID(e.target.value);
  };

  const btn_onclick = () => {
    // 父組件通過 props.myEvent 傳遞 awsFormHandler 函數到子組件，
    // 再由子組件調用
    props.myEvent();
  };

  return (
    <Fragment>
      <form className="w-full max-w-md mx-auto">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="textAccessKeyID"
            >
              AccessKeyID
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="textAccessKeyID"
              type="text"
              value={textAccessKeyID}
              onChange={textAccessKeyID_onchange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="textSecretAccessKey"
            >
              SecretAccessKey
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="textSecretAccessKey"
              type="password"
              value={textSecretAccessKey}
              onChange={textSecretAccessKey_onchange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="selectRegionID"
            >
              AWS區域
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="inline-block relative w-64">
              <select
                id="selectRegionID"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectRegionID}
                onChange={selectRegionID_onchange}
              >
                <option value="us-east-1">美國東部 (弗吉尼亞北部)</option>
                <option value="ap-northeast-1">亞太地區 (東京)</option>
                <option value="eu-west-2">歐洲 (倫敦)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={btn_onclick}
            >
              確定
            </button>
          </div>
        </div>
        <br />
        <hr />
      </form>
    </Fragment>
  );
};

export default AwsForm;
