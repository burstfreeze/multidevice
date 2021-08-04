import { WapJid } from "../proto/WapJid";
import { proto as WAProto } from './../proto/WAMessage';

export const generatePayloadLogin = (user: WapJid) => {
  const payload = {
    passive: true,
    connectType: 1,
    connectReason: 1,
    userAgent: {
      appVersion: {
        primary: 2,
        secondary: 2126,
        tertiary: 15,
      },
      platform: 15,
      releaseChannel: 0,
      mcc: "000",
      mnc: "000",
      osVersion: "0.1",
      manufacturer: "",
      device: "Desktop",
      osBuildNumber: "0.1",
      localeLanguageIso6391: "en",
      localeCountryIso31661Alpha2: "en",
    },
    webInfo: {
      webSubPlatform: 0,
    },
    username: parseInt(user.getUser(), 10),
    device: user.getDevice(),
  };

  console.log('login payload', payload);

  return WAProto.ClientPayload.encode(payload).finish();
};
