const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      ["Authorization-Refresh"]: `Bearer ${localStorage.getItem(
        "refreshToken"
      )}`,
    },
  };
};

export default authorization;
