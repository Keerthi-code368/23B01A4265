import axios from "axios";
import ACCESS_TOKEN from "../config/auth";

const LOG_ENDPOINT = "http://4.224.186.213/evaluation-service/logs";

const Log = async (stack, level, pkg, message) => {
  try {
    const payload = {
      stack,
      level,
      package: pkg,
      message,
    };

    await axios.post(LOG_ENDPOINT, payload, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    // Logging failures shouldn't stop the app
  }
};

export default Log;