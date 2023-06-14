
const toast = {
   create: function() {
      let toastHtmlElement = document.createElement('div');
      toastHtmlElement.id = 'my-toast';
      toastHtmlElement.classList.add('my-toast');
      toastHtmlElement.style.position = 'fixed';
      toastHtmlElement.style.top = '20px';
      toastHtmlElement.style.left = '20px';
      toastHtmlElement.style.borderRadius = '10px';
      toastHtmlElement.style.padding = '15px 20px';
      toastHtmlElement.style.color = '#fff';
      toastHtmlElement.style.backgroundColor = '#999';
      toastHtmlElement.style.zIndex = '1000';
      toastHtmlElement.style.maxWidth = '320px';
      return toastHtmlElement;

   },
   show: function(text, type) {
      let toastHtmlElement = this.create();
      this.hide();
      if (type === 'info') {
         toastHtmlElement.style.backgroundColor = 'rgba(13, 202, 240, 0.9)';
      } else if (type === 'success') {
         toastHtmlElement.style.backgroundColor = 'rgba(25, 135, 84, 0.9)';
      } else if (type === 'danger') {
         toastHtmlElement.style.backgroundColor = 'rgba(220, 53, 70, 0.9)';
      } else if (type === 'warning') {
         toastHtmlElement.style.backgroundColor = 'rgba(255, 193, 7, 0.9)';
      }
      toastHtmlElement.classList.add(type);
      toastHtmlElement.innerText = text;
      /*const _this = this;
      setTimeout(function(){   
         _this.hide();
      }, 3000)*/
      setTimeout(()=>{   
         this.hide();
      }, 3000)
   },
   hide: function() {
      if (document.getElementById('my-toast') !== null) {
            document.getElementById('my-toast').remove();
         }
   },
   success: function(text) {
      this.show(text, 'success');
   },
   warning: function(text) {
      this.show(text, 'warning');
   },
   danger: function(text) {
      this.show(text, 'danger');
   },
   info: function(text) {
      this.show(text, 'info');
   }
}
toast.create();