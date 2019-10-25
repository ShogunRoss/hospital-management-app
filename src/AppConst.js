class Constants {
    constructor()
    {
        this.SERVER_URL = 'http://172.16.10.221:8000'

        let n                       = 0
        this.NO_POPUP               = n++
        this.OK_POPUP               = n++
        this.YES_NO_POPUP           = n++
        this.CHANGE_PASS_POPUP      = n++
        this.CHANGE_INFOR_POPUP     = n++
        this.CHANGE_SCOPE_POPUP      = n++
    }
}

const Instance = new Constants()
export default Instance