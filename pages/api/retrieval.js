const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");
import { getSession } from "next-auth/client";
import { logMessage } from "../../lib/logger";

const retrieval = async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const formID = req.body.formID ? req.body.formID : null;
    const action = req.body.action ? req.body.action : null;
    if (!formID) {
      throw new Error("No form ID specified");
    }

    const lambdaClient = new LambdaClient({ region: "ca-central-1" });

    const command = new InvokeCommand({
      FunctionName: process.env.RETRIEVAL_API ?? "Retrieval",
      Payload: JSON.stringify({
        formID,
        action,
      }),
    });
    return await lambdaClient
      .send(command)
      .then((response) => {
        if (response.FunctionError) {
          throw Error("Submission API could not process form response");
        } else {
          logMessage.info("Lambda Client successfully triggered");
        }

        let decoder = new TextDecoder();
        const payload = JSON.parse(decoder.decode(response.Payload));

        const { Items, Count } = payload;

        res.status(200).json({ Items, Count });
      })
      .catch((err) => {
        logMessage.error(err);
        throw new Error("Could not process request with Lambda Retrieval function");
      });
  } else {
    // Not Signed in
    res.status(403).json({ error: "Need to be authenticate" });
  }
};

export default retrieval;