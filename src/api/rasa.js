import service from "../request.js";

export function sendMessageToRasa(message) {
  return service({
    url: "/webhooks/rest/webhook",
    method: "post",
    data: {
      message: {
        text: message,
      },
      sender: "user",
    },
  });
}
