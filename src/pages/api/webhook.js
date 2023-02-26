//webhooks are one way that apps send automated msges or info to other apps
//aka when paypal tells an app when your client pays you
//basically it's how online accounts "speak" to each other and get notified when something new happens

import { buffer } from "micro/types/src/lib";
import * as admin from 'firebase-admin';

export default async function webhooks(req, res) {

  if (req.method === 'POST') {

  }
}