import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const AxiosGet = (uri) => {
  const [request, setRequest] = useState({
    loading: true,
    data: null,
  });

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
    });

    getAccessTokenSilently()
      .then((res) => {
        console.log("Access Token ", res);
        const options = {
          method: "GET",
          url: `http://localhost:5000/get/${uri}`,
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${res}`,
          },
        };

        axios
          .request(options)
          .then((response) => {
            setRequest({
              loading: false,
              data: response.data,
            });
          })
          .catch(() => {
            alert("Something went wrong.");
            setRequest({
              loading: false,
              data: null,
            });
          });
      })
      .catch((e) => {
        console.debug("Error fetching access token", e.message);
      });
  }, [uri]);

  return request;
};

export default AxiosGet;
