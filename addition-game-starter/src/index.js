import Caver from "caver-js";
const config = {
  rpcURL : 'https://api.baobab.klaytn.net:8651'
}
const cav = new Caver(config.rpcURL);

const App = {
  auth: {
    accessType: 'keystore',
    keystore: '',
    password: ''
  },

  start: async function () {

  },

  handleImport: async function () {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0]);
    fileReader.onload = (event) => {
      try{
        if(!this.checkValidKeystore(event.target.result)){
            $('#message').text('유효하지않은 keystore 파일 입니다.');
            return;
        }
        this.auth.keystore = event.target.result;
        $('#message').text('keystore 통과. 비밀번호 입력하세요');
        document.querySelector('#input-password').focus();
      }catch(event){
        $('#message').text('유효하지않은 keystore 파일 입니다.');
        return;
      }
    }
  },

  handlePassword: async function () {
    this.auth.password = event.target.value;
  },

  handleLogin: async function () {
    if(this.auth.accessType === 'keystore'){
      try{
        //keystore , password 를 통해 private key 를 얻는다. 에러가 난다면 로그인 실패
        const privateKey = cav.klay.accounts.decrypt(this.auth.keystore, this.auth.password).privateKey;
        this.integrateWallet(privateKey)
      }catch (e){
        $('#message').text('비밀번호가 일치하지 않습니다.'+e);
      }
    }
  },

  handleLogout: async function () {

  },

  generateNumbers: async function () {

  },

  submitAnswer: async function () {

  },

  deposit: async function () {

  },

  callOwner: async function () {

  },

  callContractBalance: async function () {

  },

  getWallet: function () {

  },

  checkValidKeystore: function (keystore) {
    const parsedKeystore = JSON.parse(keystore)
    const isValidKeyStore = parsedKeystore.version &&
    parsedKeystore.id && parsedKeystore.address ;

    return isValidKeyStore
  },

  integrateWallet: function (privateKey) {
    const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey);
    cav.klay.accounts.wallet.add(walletInstance);

    //세션 저장
    sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance));
    this.changeUI(walletInstance)
    
  },

  reset: function () {

  },

  changeUI: async function (walletInstance) {
    $('#loginModal').modal('hide')
    $('#login').hide();
    $('#logout').show();
    $('#address').append('<br>'+'<p>' +'내 계정 주소: '+walletInstance.address +'</p>');
  },

  removeWallet: function () {

  },

  showTimer: function () {

  },

  showSpinner: function () {

  },

  receiveKlay: function () {

  }
};

window.App = App;

window.addEventListener("load", function () {
  App.start();
});

var opts = {
  lines: 10, // The number of lines to draw
  length: 30, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#5bc0de', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};