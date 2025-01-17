import { USER_JID_SUFFIX } from '../utils/Utils'

interface WapJidProps {
    type: number
    user: any
    device?: any
    agent?: any
    server?: any
}

export class WapJid {
    public static JID = 0
    public static JID_AD = 1
    private jid: WapJidProps;
    private _serialized: string;

    constructor(jid: WapJidProps) {
        this.jid = jid
    }

    static createAD(user: string, agent: number, device: number) {
        return new WapJid({
            type: WapJid.JID_AD,
            user,
            device: device ?? 0,
            agent: agent ?? 0,
        })
    }

    static create(user: string, server: string) {
        return new WapJid({
            type: WapJid.JID,
            user,
            server,
        })
    }

    toString() {
        if (this.jid.type === WapJid.JID_AD) {
            var { user: e, agent: t, device: r } = this.jid,
                n = USER_JID_SUFFIX
            return 0 === t && 0 === r ? `${e}@${n}` : 0 !== t && 0 === r ? `${e}.${t}@${n}` : 0 === t && 0 !== r ? `${e}:${r}@${n}` : `${e}.${t}:${r}@${n}`
        }
        this.jid.type
        var { user: s, server: o } = this.jid
        return null != s ? `${s}@${o}` : o
    }

    getUser() {
      return this.jid.user;
    }
    
    getDevice() {
      return this.jid.device;
    }

    getInnerJid() {
        return this.jid
    }
    isCompanion() {
        return null != this.jid.device && this.jid.device !== 0
    }
    isUser() {
        return 'c.us' === this.jid.server
    }
    isGroup() {
        return 'g.us' === this.jid.server
    }
    isGroupCall() {
        return 'call' === this.jid.server
    }
    isServer() {
        return 'server' === this.jid.user && 'c.us' === this.jid.server
    }
    isPSA() {
        return '0' === this.jid.user && 'c.us' === this.jid.server
    }
    isStatusV3() {
        return 'status' === this.jid.user && 'broadcast' === this.jid.server
    }
    toJSON() {
        return {
          type: 'wapJid',
          jid: this.jid,
        };
    }

    static parse(data: any) {
      return new WapJid(data.jid);
    }
}

export const G_US = WapJid.create(null, 'g.us')
export const S_WHATSAPP_NET = WapJid.create(null, 's.whatsapp.net')
