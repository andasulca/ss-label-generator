import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

const Loader = () => {
	const override = css`
    display: block;
    margin: 0 auto;
  `;

	return <BeatLoader color={"#dc3545"} css={override} size={20} />;
};

export default Loader;
