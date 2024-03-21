import service from "@/utils/request";
export function sendMessageToRasa(message) {
  return service({
    url: "/webhooks/rest/webhook",
    method: "post",
    data: {
      message: message,
      sender: "user",
    },
  });
}
