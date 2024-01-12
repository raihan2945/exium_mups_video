const baseUrl = `http://localhost:6050`;
// const baseUrl = `http://128.199.87.251:6050`;

function uploadVideo(videoBlob, sap_id) {
  const formData = new FormData();
  formData.append("video_file", videoBlob);
  formData.append("sap_id", sap_id);

  const requestOptions = {
    method: "POST",
    body: formData,
  };
  return fetch(`${baseUrl}/api/upload_video`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
}

function fetchUserInfo(sap_id) {
  const data = {
    sap_id: sap_id,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/api/login`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("Result is : ", result);
      return result;
    })
    .catch((err) => {
      console.log("Error is : ", err);
    });
}

export const CallApi = {
  fetchUserInfo,
  uploadVideo,
};
