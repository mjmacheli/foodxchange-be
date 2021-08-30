import Nodemailer from "nodemailer";

const baseMail = async (from: string, topic: string, body: string) => {
  console.log(" > ", body, " ", topic, " ", from);
  let transporter = Nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "fetsihd@gmail.com",
      pass: "rfjytenblewqhkvs",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: {
      name: "FoodXChange | Welcome",
      address: body,
    },
    headers: {
      priority: "high",
    },
    messageId: "msg_id",
    date: new Date(),
    to: "machelimail@gmail.com",
    subject: topic,
    text: "hai",
    html: `${from}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    } else {
      return info.response;
    }
  });
};

export { baseMail };
