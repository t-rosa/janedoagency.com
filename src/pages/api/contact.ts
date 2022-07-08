import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}
function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: req.body.email,
    to: 'toma.rosa@protonmail.com',
    subject: `Prise de contact - ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.message,
    html: `
<!DOCTYPE html>
<html lang="fr">
<body>
  <div style="display:flex; align-items: center;">
    <h3>Nom :</h3> &nbsp; <span>${req.body.lastName}</span>
  </div>
  <div style="display:flex; align-items: center;">
    <h3>Prénom :</h3> &nbsp; <span>${req.body.firstName}</span>
  </div>
  <div style="display:flex; align-items: center;">
    <h3>Email :</h3> &nbsp; <span>${req.body.email}</span>
  </div>
  <div style="display:flex; align-items: center;">
    <h3>Téléphone :</h3> &nbsp; <span>${req.body.phone}</span>
  </div>
  </br>
  <h3>Message</h3> 
  </br>
  <div>${req.body.message}</div>
</body>
</html>
    `,
  }

  transporter.sendMail(mailData, (error: any, information: any) => {
    if (error) {
      res.status(400).json({ message: error })
    } else {
      res.status(200).json({ message: information })
    }
  })
}
export default handler
