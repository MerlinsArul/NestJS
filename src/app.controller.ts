import { Body, Controller, Post, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { generate } from 'otp-generator';

import { User } from './user.model';
import * as nodemailer from 'nodemailer';

@Controller()
export class AppController {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  private emailSender = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: 'merlins.arul@aspiresys.com',
      pass: 'Jesusmariasaves@01',
    },
  });

  @Post('/login')
  async login(@Body() req, @Res() res) {
    const { email, password } = req;

    try {
      const user = await this.userModel.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (user.password !== password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const otp = generate(6, {
        digits: true,
      });

      user.otp = otp;
      await user.save();

      const mailOptions = {
        from: 'merlins.arul@aspiresys.com',
        to: user.email,
        subject: 'Login OTP',
        text: `Your OTP is: ${otp}`,
      };

      await this.emailSender.sendMail(mailOptions);

      res.status(200).json({ message: 'OTP sent to your email' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  @Post('/verify-otp')
  async verifyOTP(@Body() req, @Res() res) {
    const { email, otp } = req;

    try {
      const user = await this.userModel.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (user.otp !== otp) {
        return res.status(401).json({ message: 'Incorrect OTP' });
      }

      user.isVerified = true;
      user.otp = null;
      await user.save();

      res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
