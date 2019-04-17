export default {
  data() {
    return {
      status = {
        isFetching: false,
        isSending: false,
      },
      isShowAlert = false,
      commonAlertOption: {
        title: '',
        meaasge: '',
      },
    };
  },
  metheds: {
    $showAlert(title, message, messageDesc, callback) {
      this.isShowAlert = true;
      this.commonAlertOption = {
        title,
        message,
        messageDesc,
        callback,
      };
    },
    $showErrorAlert(message, callback) {
      this.$showAlert('Error Alert', '', message, callback);
    },
  },
};
